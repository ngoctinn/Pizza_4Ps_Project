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
