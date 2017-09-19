function changeProject(e) {
  var data = e.currentTarget.dataset.key;

  var selectedList = $(e.currentTarget);
  var selectedItem;
  items.each(function (idx, el) {
    if (el.dataset.key === data) { selectedItem = $(el); }
  });

  list.removeClass('list-selected');
  items.addClass('hidden');

  selectedList.addClass('list-selected');
  selectedItem.removeClass('hidden');
}

var list = $('.list li');
var items = $('.project-content > li');

list.on('click', changeProject);
