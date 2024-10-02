# Dự án Website Pizza 4P's

## Mục lục
1. [Tổng quan dự án](#tổng-quan-dự-án)
2. [Mục tiêu](#mục-tiêu)
3. [Tính năng](#tính-năng)
   - [Tính năng cho người dùng cuối](#tính-năng-cho-người-dùng-cuối)
   - [Tính năng cho quản trị viên](#tính-năng-cho-quản-trị-viên)
4. [Yêu cầu hệ thống](#yêu-cầu-hệ-thống)
5. [Công nghệ sử dụng](#công-nghệ-sử-dụng)
6. [Bắt đầu](#bắt-đầu)
   - [Yêu cầu trước khi cài đặt](#yêu-cầu-trước-khi-cài-đặt)
   - [Cài đặt](#cài-đặt)
7. [Quy trình làm việc với Git](#quy-trình-làm-việc-với-git)
8. [Đóng góp](#đóng-góp)
9. [Thành viên nhóm](#thành-viên-nhóm)

## Tổng quan dự án
Dự án này nhằm phát triển một trang web cho Pizza 4P's, cho phép khách hàng xem thực đơn và đặt hàng trực tuyến một cách dễ dàng. Trang web sẽ có giao diện đơn giản, thân thiện với người dùng và tương thích với nhiều thiết bị khác nhau.

## Mục tiêu
- Tạo trang web hiển thị thực đơn của Pizza 4P's
- Cho phép khách hàng đặt hàng trực tuyến
- Hiển thị thông tin chi nhánh và bản đồ các cửa hàng
- Cung cấp thông tin liên hệ và hỗ trợ khách hàng
- Xây dựng trang quản trị để quản lý đơn hàng, khách hàng và thống kê  
## Tính năng

### Tính năng cho người dùng cuối
1. **Hiển thị sản phẩm**: Duyệt sản phẩm theo danh mục với phân trang
2. **Chi tiết sản phẩm**: Xem thông tin chi tiết về từng sản phẩm
3. **Tìm kiếm**: Tùy chọn tìm kiếm cơ bản và nâng cao
4. **Xác thực người dùng**: Chức năng đăng nhập/đăng xuất
5. **Đăng ký**: Đăng ký để trở thành khách hàng
6. **Giỏ hàng**: Thêm sản phẩm, điều chỉnh số lượng và chọn địa chỉ giao hàng
7. **Lịch sử đơn hàng**: Xem các đơn hàng đã đặt và chi tiết

### Tính năng cho quản trị viên
1. **Giao diện quản trị**: Đăng nhập riêng cho quản trị viên
2. **Quản lý người dùng**: Thêm, sửa và khóa tài khoản người dùng
3. **Quản lý sản phẩm**: Thêm, sửa và xóa sản phẩm
4. **Quản lý đơn hàng**: Xem và cập nhật trạng thái đơn hàng
5. **Thống kê bán hàng**: Tạo báo cáo dựa trên sản phẩm, danh mục và khoảng thời gian

## Yêu cầu hệ thống
1. **Tính chính xác và đầy đủ**: Đảm bảo tất cả các file giao diện cần thiết đều có mặt và hoạt động đầy đủ
2. **Tính thẩm mỹ**: Tuân thủ nguyên tắc C.R.A.P (Tương phản, Lặp lại, Căn chỉnh, Gần kề)
3. **Tính tiện dụng**: Sử dụng ngôn ngữ rõ ràng và biểu tượng trực quan

## Công nghệ sử dụng
- HTML/CSS
- JavaScript
- Bootstrap

## Bắt đầu

### Cài đặt
1. Clone repository:
   ```
   git clone https://github.com/username/pizza-4ps-website.git
   ```
2. Di chuyển vào thư mục dự án:
   ```
   cd pizza-4ps-website
   ```
3. Mở dự án trong trình soạn thảo hoặc IDE

## Quy trình làm việc với Git và GitHub

### Cấu hình Git
Trước khi bắt đầu, hãy cấu hình Git với thông tin cá nhân:
```bash
git config --global user.name "Tên của bạn"
git config --global user.email "email.cua.ban@example.com"
```

### Quy trình làm việc cơ bản
1. **Clone repository**:
   ```bash
   git clone https://github.com/username/pizza-4ps-website.git
   cd pizza-4ps-website
   ```

2. **Tạo branch mới**:
   ```bash
   git checkout -b feature/ten-tinh-nang-moi
   ```

3. **Thực hiện các thay đổi và commit**:
   ```bash
   git add .
   git commit -m "Mô tả chi tiết về những thay đổi"
   ```

4. **Push branch lên GitHub**:
   ```bash
   git push origin feature/ten-tinh-nang-moi
   ```

5. **Tạo Pull Request**:
   - Truy cập repository trên GitHub
   - Chọn "New pull request"
   - Chọn branch của bạn để so sánh với main
   - Điền thông tin mô tả Pull Request
   - Nhấn "Create pull request"

6. **Review và Merge**:
   - Người review sẽ kiểm tra code và để lại comment nếu cần
   - Sau khi được chấp thuận, Pull Request sẽ được merge vào main

### Cập nhật local repository
Để đảm bảo bạn luôn làm việc với phiên bản mới nhất:
```bash
git checkout main
git pull origin main
```

### Xử lý conflicts
Nếu xuất hiện conflicts khi merge:
1. Mở các file bị conflict
2. Tìm và sửa các đoạn code bị conflict
3. Commit các thay đổi đã sửa
4. Push lại lên branch của bạn

### Sử dụng GitHub Issues
- Sử dụng Issues để theo dõi bugs, tính năng mới, và các task
- Gán labels, milestones và assignees cho Issues để quản lý hiệu quả

### GitHub Actions (Tùy chọn)
- Sử dụng GitHub Actions để tự động hóa quy trình CI/CD
- Tạo file `.github/workflows/main.yml` để cấu hình workflow

## Đóng góp
1. Fork repository
2. Tạo branch mới: `git checkout -b feature/TinhNangMoi`
3. Commit thay đổi: `git commit -am 'Thêm tính năng mới'`
4. Push lên branch: `git push origin feature/TinhNangMoi`
5. Tạo Pull Request mới trên GitHub
   
## Thành viên nhóm
1. Nguyễn Ngọc Tín - 3121410041
2. Nguyễn Thị Tuyết Thư - 3121410017
3. Ngô Gia Khang - 3121410041
4. Cao Yên Tuấn An - Mã số sinh viên

Nếu có bất kỳ câu hỏi hoặc thắc mắc nào, vui lòng tạo một issue trên repository GitHub.
