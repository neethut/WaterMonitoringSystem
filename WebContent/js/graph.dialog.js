function openGraph (titleText, graphData) {
	var $dialog = $("#graphDialogBox").dialog({
		title: titleText,
		autoOpen: false,
		modal: true,
		draggable: true,
		resizable: false,
		dialogClass: "graphClass",
	}).load("Pages/graph.container.html", function() {
		$dialog.find(".graphCloseButton").on("click", function(e) {
			$().dialog("destroy");
			$dialog.dialog("close");
			$dialog.dialog("destroy");
		});
		$dialog.dialog("open");
		$('.graphClass').css({'position': 'absolute', 'background-color': 'white', 'height': '100%', 'width': '100%', 'top': '0px', 'left': '0px'});
		loadGraph ();
	});
}

function loadGraph () {
	var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var config = {
		type: 'line',
		data: {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
				label: 'Temprature',
				backgroundColor: window.chartColors.red,
				borderColor: window.chartColors.red,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				],
				fill: false,
			}, {
				label: 'PH',
				fill: false,
				backgroundColor: window.chartColors.blue,
				borderColor: window.chartColors.blue,
				data: [
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor(),
					randomScalingFactor()
				],
			}]
		},
		options: {
			responsive: true,
			title: {
				display: true,
				text: 'Temprature and PH v/s time chart'
			},
			tooltips: {
				mode: 'index',
				intersect: false,
			},
			hover: {
				mode: 'nearest',
				intersect: true
			},
			scales: {
				xAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Month'
					}
				}],
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Temprature and PH'
					}
				}]
			}
		}
	};

		var ctx = document.getElementById('canvas').getContext('2d');
		window.myLine = new Chart(ctx, config);
}