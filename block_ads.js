// Lấy nội dung phản hồi từ API
let body = $response.body;

// Kiểm tra nếu nội dung phản hồi hợp lệ
if (body) {
    // Thay thế các giá trị liên quan đến quảng cáo thành false hoặc 0
    body = body.replace(/"show_ads":true/g, '"show_ads":false');
    body = body.replace(/"ad_enabled":true/g, '"ad_enabled":false');
    body = body.replace(/"ads_position":\d+/g, '"ads_position":0');
    body = body.replace(/"is_advertisement":true/g, '"is_advertisement":false');

    // Xóa các quảng cáo dưới dạng JSON array
    body = body.replace(/"ad_list":\[[^\]]*\]/g, '"ad_list":[]');

    // Xử lý một số API phổ biến liên quan đến quảng cáo
    body = body.replace(/"promotion_banner":\{.*?\}/g, '"promotion_banner":{}');
}

// Xuất phản hồi đã được chỉnh sửa
$done({ body });
