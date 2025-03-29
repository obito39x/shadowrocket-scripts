// Chặn quảng cáo trên Sudoku.com
let obj = JSON.parse($response.body);

// Nếu có dữ liệu quảng cáo, xóa nó đi
if (obj && obj.ads) {
    obj.ads = [];
}

$done({ body: JSON.stringify(obj) });
