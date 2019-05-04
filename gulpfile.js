var gulp = require('gulp');
var packager = require('electron-packager');
var config = require('./package.json');
var winInstaller = require('electron-windows-installer');
var winstaller = require('electron-winstaller');

// Windows向けアプリの設定
gulp.task('packager-win', function (done) {
    packager({
        dir: 'src',              // アプリ本体のフォルダ 
        out: './release/',                 // 出力先のフォルダ
        name: 'autodon',           // アプリ名
        arch: 'x64',               // 64bit
        platform: 'win32',         // Windows向け
        electronVersion: '5.0.0',  // Electronのバージョン
        overwrite: true,           // すでにフォルダがある場合は上書き
        description: 'Mastodon Bot etc',
        appVersion: config.version,// アプリバージョン
        appCopyright: 'Apatch 2.0',// 著作権
    });
    done();                        //これ必要っぽい
});
gulp.task('create_windows_installer', function (done) {
    winstaller.createWindowsInstaller({
        appDirectory: './release/autodon-win32-x64',
        outputDirectory: './installer',
        authors: 'takusan_23',
        exe: 'autodon.exe'
    })
});