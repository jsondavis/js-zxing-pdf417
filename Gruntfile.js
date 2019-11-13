module.exports = function(grunt) {

    var config = {
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: [
                'Gruntfile.js',
                '*.js',
                'pdf417/*.js',
                'pdf417/decoder/*.js',
                'pdf417/detector/*.js',
                'pdf417/decoder/ec/*.js',
                'common/*.js',
                'common/detector/*.js'
            ]
        },

        concat: {
            dist: {
                options: {
                    banner: '(function(exports, Error, document, Uin8Array, Uint32Array, BigInteger, undefined){\ndocument.addEventListener("DOMContentLoaded", function() {\n',
                    footer: "}, false);\n}(window, window.Error, window.document, window.Uint8Array, window.Uint32Array, window.bigInt));\n"
                },
                src: [
                    './src/SupportClass.js',
                    './src/ResultMetadataType.js',
                    './src/BarcodeFormat.js',
                    './src/Result.js',
                    './src/DecodeHintType.js',
                    './src/BinaryBitmap.js',
                    './src/Binarizer.js',
                    './src/ResultPoint.js',
                    './src/LuminanceSource.js',
                    './src/InvertedLuminanceSource.js',
                    './src/BaseLuminanceSource.js',
                    './src/BitmapLuminanceSource.js',
                    './src/common/DecoderResult.js',
                    './src/common/BitArray.js',
                    './src/common/BitMatrix.js',
                    './src/common/detector/MathUtils.js',
                    './src/common/ECI.js',
                    './src/common/CharacterSetECI.js',
                    './src/common/GlobalHistogramBinarizer.js',
                    './src/common/HybridBinarizer.js',
                    './src/pdf417/PDF417ResultMetadata.js',
                    './src/pdf417/PDF417Common.js',
                    './src/pdf417/detector/PDF417DetectorResult.js',
                    './src/pdf417/detector/Detector.js',
                    './src/pdf417/decoder/ec/ModulusPoly.js',
                    './src/pdf417/decoder/ec/ModulusGF.js',
                    './src/pdf417/decoder/ec/ErrorCorrection.js',
                    './src/pdf417/decoder/BarcodeMetadata.js',
                    './src/pdf417/decoder/BarcodeValue.js',
                    './src/pdf417/decoder/BoundingBox.js',
                    './src/pdf417/decoder/Codeword.js',
                    './src/pdf417/decoder/DecodedBitStreamParser.js',
                    './src/pdf417/decoder/DetectionResult.js',
                    './src/pdf417/decoder/DetectionResultColumn.js',
                    './src/pdf417/decoder/DetectionResultRowIndicatorColumn.js',
                    './src/pdf417/decoder/PDF417CodewordDecoder.js',
                    './src/pdf417/decoder/PDF417ScanningDecoder.js',
                    './src/pdf417/PDF417Reader.js'
                ],
                dest: 'dist/zxing-pdf417.js'
            }
        },

        uglify: {
            dist: {
                src: 'dist/zxing-pdf417.js',
                dest: 'dist/zxing-pdf417.min.js'
            }
        }
    };


    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [/*'jshint', */'concat', 'uglify']);
};
