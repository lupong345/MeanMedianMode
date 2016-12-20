Framework7.prototype.plugins.statistics = function (app, params) {
    if (!params) return;
				
				mean = function(num){
		 		var y = 0;
		 		$.each(num,function(a,b){
		 			y = y + b;
		 		})
		 		return y/num.length;
				},
				
				median =  function(num){
                var middle = Math.floor(num.length/2);
                if (num.length % 2)
                    return num[middle];
                else
                    return (num[middle-1]+num[middle])/2.0;
				},

			    mode = function(num){

				if (num.length == 0)
				return null;

				var modeMap = {},
				maxEl = num[0],
				maxCount = 1;
				for(var i = 0; i < num.length; i++){
				var el = num[i];
				if (modeMap[el] == null)
					modeMap[el] = 1;
				else
					modeMap[el]++;
				if (modeMap[el] > maxCount)
				{
					maxEl = el;
					maxCount = modeMap[el];
				}
				else if (modeMap[el] == maxCount){
					maxCount = modeMap[el];
				}
			}
			return maxEl;
					}
					
			 return {
        hooks: {
            appInit: function () {
			$$("#compute").on('click',function(){

	                var numbers = $$("input[data-cmd='numbers']").val().split(',');
					console.log(numbers);
	                $.each(numbers,function(a,b){
                        numbers[a] = parseInt(numbers[a]);
		            });
					
					var mean1 = mean(numbers);
                    var median1 = median(numbers);
                    var mode1 = mode(numbers);
                    var content  = "Mean: "+mean1+"<br/>Median: "+median1+"<br/>Mode: "+mode1;
                    $$(statsHere).html(content);
                    console.log(numbers);
			  });
	        }
	    }
    };
};

var $$ = Dom7;
var app = new Framework7({
    statistics:true
});
