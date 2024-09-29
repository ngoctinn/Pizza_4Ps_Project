# Mô tả dự án: Website Pizza 4P's

## 1. Giới thiệu
Dự án này là xây dựng một website cho **Pizza 4P's** nhằm giúp khách hàng xem thực đơn và đặt hàng trực tuyến một cách dễ dàng. Website sẽ có giao diện đơn giản, thân thiện với người dùng, phù hợp cho các thiết bị khác nhau.

## 2. Mục tiêu
- Tạo một website hiển thị thực đơn của Pizza 4P's.
- Cho phép khách hàng đặt món online.
- Hiển thị thông tin chi nhánh và bản đồ các cửa hàng.
- Cung cấp thông tin liên hệ và hỗ trợ khách hàng.
- trang admin quản lý đơn hàng, khách hàng, thống kê

## Các Chức Năng Dành Cho Người Dùng Cuối (End-user)

1. **Hiển thị sản phẩm theo phân loại (có phân trang)**:
   - Người dùng có thể duyệt qua các sản phẩm theo danh mục như pizza, pasta, đồ uống, v.v. Sản phẩm được phân trang để dễ dàng xem từng phần.

2. **Hiển thị chi tiết sản phẩm**:
   - Mỗi sản phẩm sẽ có trang chi tiết, hiển thị thông tin đầy đủ về sản phẩm như tên, giá, mô tả, thành phần, và hình ảnh.

3. **Tìm kiếm sản phẩm**:
   - **Cơ bản**: Tìm kiếm sản phẩm theo tên.
   - **Nâng cao**: Tìm kiếm theo tên, chọn danh mục và khoảng giá. Kết quả tìm kiếm có phân trang để dễ xem.

4. **Đăng nhập/Đăng xuất**:
   - Người dùng có thể đăng nhập và đăng xuất. Thông tin tài khoản đang đăng nhập sẽ được hiển thị trên giao diện.

5. **Đăng ký**:
   - Người dùng cần đăng ký tài khoản để trở thành khách hàng, chỉ khi đăng ký mới có thể mua hàng.

6. **Giỏ hàng**:
   - Người dùng có thể thêm sản phẩm vào giỏ hàng, thay đổi số lượng sản phẩm trong giỏ, và chọn địa chỉ giao hàng (có thể chọn từ tài khoản hoặc nhập địa chỉ mới).

7. **Lịch sử mua hàng**:
   - Người dùng có thể xem lại lịch sử mua hàng của tài khoản đang đăng nhập, bao gồm chi tiết đơn hàng đã đặt trước đó.

---

## 3. Các Chức Năng Dành Cho Người Quản Trị (Web-admin)

1. **Giao diện admin**:
   - Quản trị viên đăng nhập vào trang admin thông qua một URL riêng (không dùng chung giao diện với khách hàng).
   - Hiển thị thông tin phân biệt tài khoản quản trị và danh sách chức năng quản trị.

2. **Quản lý người dùng**:
   - Thêm, sửa thông tin người dùng, và khóa tài khoản người dùng (không cho phép người dùng bị khóa đăng nhập).

3. **Quản lý sản phẩm**:
   - **Thêm sản phẩm**: Có chức năng upload hình ảnh sản phẩm.
   - **Sửa sản phẩm**: Hiển thị đầy đủ thông tin trước khi sửa, cho phép sửa và bỏ hình.
   - **Xóa sản phẩm**: Hệ thống sẽ hỏi xác nhận trước khi xóa.

4. **Quản lý đơn hàng của khách**:
   - Xem danh sách đơn hàng theo khoảng thời gian, và chi tiết từng đơn hàng trong danh sách.
   - Đánh dấu trạng thái đơn hàng (chưa xử lý hoặc đã xử lý).

5. **Thống kê tình hình kinh doanh**:
   - Xem các đơn hàng và tính tổng theo sản phẩm hoặc loại sản phẩm trong khoảng thời gian cụ thể. Quản trị viên có thể nhập sản phẩm, loại sản phẩm và khoảng thời gian để lọc dữ liệu.

---

## 4. Yêu Cầu Đối Với Hệ Thống

### 1. **Tính đúng và đầy đủ**:
   - Đảm bảo đầy đủ các tập tin giao diện theo yêu cầu.
   - Hệ thống liên kết hoạt động đầy đủ, không có trang "dead-end".

### 2. **Tính thẩm mỹ**:
   - Đánh giá theo nguyên tắc C.R.A.P (Contrast, Repetition, Alignment, Proximity).
   - Đảm bảo tính tiện dụng (usability), sử dụng ngôn ngữ và biểu tượng đại diện rõ ràng, dễ hiểu.

## 4. Công nghệ sử dụng
- **HTML/CSS**
- **JavaScript**
- **Bootstrap**

## 5. Kết quả mong đợi
Hoàn thành website đáp ứng các yêu cầu về tính năng và giao diện, giúp khách hàng dễ dàng tìm hiểu và đặt hàng trực tuyến từ Pizza 4P's.

--- 

**Sinh viên thực hiện**: [Tên của bạn]  
**Lớp**: [Tên lớp]  
**Mã số sinh viên**: [MSSV]
# README: Hướng Dẫn Sử Dụng Git và GitHub

## Mục lục
1. [Cấu hình Git](#1-cấu-hình-git)
2. [Khởi tạo Git trong project](#2-khởi-tạo-git-trong-project)
3. [Theo dõi trạng thái dự án](#3-theo-dõi-trạng-thái-dự-án)
4. [Commit code](#4-commit-code)
5. [Push code lên remote repository](#5-push-code-lên-remote-repository)
6. [Làm việc với branch](#6-làm-việc-với-branch)
7. [Merge branch](#7-merge-branch)
8. [Git workflow hiệu quả](#8-git-workflow-hiệu-quả)

---

## 1. Cấu hình Git
Trước khi bắt đầu sử dụng Git, cần cấu hình một số thông tin cá nhân:

```bash
git config --global user.name "Tên của bạn"
git config --global user.email "example@email.com"
```

Lệnh trên sẽ lưu thông tin của bạn vào cấu hình toàn cục, áp dụng cho tất cả các dự án Git mà bạn làm việc.

---

## 2. Khởi tạo Git trong project
Để khởi tạo Git trong một dự án hiện tại, sử dụng lệnh sau:

```bash
git init
```

Hoặc clone một repository từ GitHub về máy local:

```bash
git clone <URL_repository>
```

Ví dụ:

```bash
git clone https://github.com/username/repository.git
```

---

## 3. Theo dõi trạng thái dự án
Sau khi chỉnh sửa, thêm mới, hoặc xóa file, để xem thay đổi của dự án, sử dụng lệnh:

```bash
git status
```

---

## 4. Commit code
Trước khi lưu trạng thái code (commit), cần thêm các thay đổi vào stage:

- Thêm tất cả file:

  ```bash
  git add .
  ```

- Hoặc thêm một file cụ thể:

  ```bash
  git add <path_to_file>
  ```

Sau đó, commit các thay đổi:

```bash
git commit -m "Mô tả ngắn về thay đổi"
```

---

## 5. Push code lên remote repository
Sau khi commit, đẩy thay đổi lên remote repository bằng lệnh:

```bash
git push <remote_repository> <branch>
```

Ví dụ:

```bash
git push origin master
```

---

## 6. Làm việc với branch
- Tạo một branch mới:

  ```bash
  git branch <new_branch>
  ```

- Tạo và chuyển sang branch mới:

  ```bash
  git checkout -b <new_branch>
  ```

- Chuyển đổi giữa các branch:

  ```bash
  git checkout <branch_name>
  ```

- Liệt kê tất cả các branch hiện có:

  ```bash
  git branch -a
  ```

---

## 7. Merge branch
Khi muốn merge branch A vào branch B, thực hiện các bước sau:

1. Lấy code mới nhất từ branch B:

   ```bash
   git pull origin <branch_B>
   ```

2. Merge branch A vào branch B:

   ```bash
   git merge <branch_A>
   ```

Nếu làm việc trong một nhóm lớn, hãy tạo **merge request** trên GitHub để người có quyền xem xét trước khi merge code.

---

## 8. Git workflow hiệu quả
- **Master branch** là nhánh chính chứa mã nguồn ổn định cho production.
- **Develop branch** chứa mã nguồn mới nhất đang phát triển và được kiểm thử.
- Khi phát triển một tính năng mới, hãy tạo một branch riêng từ develop.
- Sau khi hoàn thành, tạo merge request để review và merge vào develop hoặc master.
- Cần pull code từ repository gốc để đảm bảo mã nguồn của bạn luôn cập nhật nhất.

---

**Chúc các bạn làm việc hiệu quả với Git và GitHub!**
