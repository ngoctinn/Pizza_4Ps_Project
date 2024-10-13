# Dự án Website Pizza 4P's

## Mục lục
1. [Thành viên nhóm](#thành-viên-nhóm)
2. [Tổng quan dự án](#tổng-quan-dự-án)
3. [Mục tiêu](#mục-tiêu)
4. [Tính năng](#tính-năng)
   - [Tính năng cho người dùng cuối](#tính-năng-cho-người-dùng-cuối)
   - [Tính năng cho quản trị viên](#tính-năng-cho-quản-trị-viên)
5. [Yêu cầu hệ thống](#yêu-cầu-hệ-thống)
6. [Công nghệ sử dụng](#công-nghệ-sử-dụng)
7. [Bắt đầu](#bắt-đầu)
   - [Yêu cầu trước khi cài đặt](#yêu-cầu-trước-khi-cài-đặt)
   - [Cài đặt](#cài-đặt)
8. [Quy trình làm việc với Git](#quy-trình-làm-việc-với-git)
9. [Đóng góp](#đóng-góp)








## Giới thiệu

1. **Tên đề tài:** Pizza 4P's Website
2. **Học phần:** Lập trình web và ứng dụng
3. **Học kì:** I 
4. **Năm học:** 2024-2025

## Tổng quan dự án

Đồ án cuối kì phát triển trang web cho Pizza 4P's, giúp khách hàng xem thực đơn và đặt hàng trực tuyến dễ dàng. Trang web sẽ có giao diện đơn giản, thân thiện và tương thích với nhiều thiết bị. Ngoài ra, trang web còn có phần quản trị (admin) để quản lý thực đơn, đơn hàng và người dùng.

## Thành viên nhóm

| STT | MSSV       | Họ                | Tên          |
|-----|------------|-------------------|--------------|
| 1   | 3121410041 | Nguyễn Ngọc       | Tín          |
| 2   | 3121410017 | Nguyễn Thị Tuyết  | Thư          |
| 3   | 3121410041 | Ngô Gia           | Khang        |
| 4   | 3121410044 | Cao Yên Tuấn      | An           |


## Mục tiêu
- Tạo trang web hiển thị thực đơn của Pizza 4P's
- Cho phép khách hàng đặt hàng trực tuyến
- Hiển thị thông tin chi nhánh và bản đồ các cửa hàng
- Cung cấp thông tin liên hệ và hỗ trợ khách hàng
- Xây dựng trang quản trị để quản lý đơn hàng, khách hàng và thống kê  
## Tính năng

### Tính năng cho người dùng cuối
1. **Hiển thị sản phẩm theo phân loại(có phân trang)**
2. **Hiển thị chi tiết sản phẩm (thông tin chi tiết phù hợp với sản phẩm bán)**
3. **Tìm kiếm (kết quả tìm kiếm có phân trang)**
   - Cơ bản theo tên sản phẩm
   - Nâng cao: theo tên sản phẩm, có chọn phân loại và khoảng giá (kết
hợp nhiều tiêu chí trong 1 thao tác tìm kiếm)
4. **Đăng nhập / đăng xuất (hiển thị thông tin tài khoản đang đăng nhập)**
5. **Đăng kí (phải đăng kí trở thành khách hàng mới được phép mua hàng)**
6. **Giỏ hàng**
7. **Khách hàng chọn mua sản phẩm bằng giỏ hàng:**
   - Cho phép thêm bớt sản phẩm trong giỏ hàng.
   - Cho phép chọn địa chỉ từ tài khoản hoặc nhập địa chỉ giao hàng mới
(thiết kế các control nhập liệu đủ và đúng cho từng trường hợp)
   - Cho phép chọn thanh toán tiền mặt/chuyển khoản hoặc thanh toán qua
thẻ (cần hiển thị giao diện của cổng thanh toán cho người mua nhập
thông tin thẻ)
   - Cho phép người mua coi lại tóm tắt hoá đơn của cả quá trình mua.
8. **Khách hàng xem lại lịch sử mua hàng của tài khoản đang đăng nhập**

### Tính năng cho quản trị viên

1. **Giao diện admin**
   - Đăng nhập bằng URL riêng (không dùng chung giao diện với người mua)
   - Hiển thị thông tin đăng nhập của tài khoản quản trị và danh mục chức năng cho người quản trị

2. **Quản lý người dùng**
   - Thêm, sửa thông tin người dùng
   - Khóa người dùng

3. **Quản lý sản phẩm**
   - Thêm sản phẩm: có chức năng upload hình
   - Sửa sản phẩm: hiển thị đúng thông tin trước khi sửa (bao gồm sửa và bỏ hình)
   - Xóa sản phẩm: hỏi trước khi xóa

4. **Quản lý đơn hàng của khách**
   - Đánh dấu đơn hàng: chưa xử lý (khách hàng mới đặt), đã xác nhận, đã giao thành công hoặc đã hủy
   - Lọc các đơn hàng trong một khoảng thời gian (dựa trên thời gian hóa đơn), thiết kế đường link cho người quản trị xem chi tiết một đơn hàng
   - Lọc các đơn hàng theo tình trạng đơn hàng và cho người quản trị sắp xếp các đơn hàng theo địa chỉ giao hàng (theo quận), thiết kế đường link cho người quản trị xem chi tiết một đơn hàng

5. **Thống kê tình hình kinh doanh**
   - Thống kê theo khoảng thời gian
   - Thống kê trên các mặt hàng được bán ra (liệt kê mặt hàng, số lượng bán ra, tổng tiền thu được). In ra tổng thu trên tất cả mặt hàng, chỉ ra hàng nào bán chạy/ế nhất. Cho phép xem các hóa đơn trên mặt hàng
   - Thống kê trên đầu khách hàng và in ra 5 khách hàng phát sinh doanh thu nhiều nhất trong khoảng thời gian. Cho phép xem hóa đơn của từng khách hàng

## Yêu cầu hệ thống
1. **Tính đúng và đủ**
   - Đầy đủ các tập tin giao diện theo yêu cầu (tập tin đặt tên đúng nguyên tắc)
   - Hệ thống liên kết hoạt động đúng, đủ và không có trang dead-end.

2. **Tính thẩm mỹ**
   - Đánh giá theo nguyên tắc C.R.A.P.
   - Đánh giá sử dụng ngôn ngữ, hệ thống biểu tượng đại diện và tính tiện dụng
   - Tính chất Responsive tương thích với thiết bị điện tử (chiều ngang và dọc)


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



