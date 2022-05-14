function start() {
/* Funcionando
Cambia IDCARPETAORIGEN por tu ID
Cambia NOMBRENUEVACARPETA por el nombre de tu nueva carpeta
*/
  var sourceFolder = DriveApp.getFolderById('IDCARPETAORIGEN');
  var targetFolder = "CLONES";

  var source = DriveApp.getFoldersByName(sourceFolder);
  var target = DriveApp.createFolder(targetFolder);

  if (source.hasNext()) {
    copyFolder(source.next(), target);
  }
}

function copyFolder(source, target) {

  var folders = source.getFolders();
  var files   = source.getFiles();

  while(files.hasNext()) {
    var file = files.next();
    file.makeCopy(file.getName(), target);
  }

  while(folders.hasNext()) {
    var subFolder = folders.next();
    var folderName = subFolder.getName();
    var targetFolder = target.createFolder(folderName);
    copyFolder(subFolder, targetFolder);
  }

}