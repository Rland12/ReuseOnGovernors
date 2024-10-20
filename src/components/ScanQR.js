import "./ScanQR.css";

const ScanQR = () => {
  // Mock user profile image
  const userProfileImage = "https://via.placeholder.com/100"; // Placeholder image

  return (
    <div className="scan-qr-container">
      <div className="scan-card">
        {/* User profile image at the top */}
        <div className="profile-image-container">
          <img
            src={userProfileImage}
            alt="User Profile"
            className="profile-image"
          />
        </div>

        {/* Placeholder for QR code */}
        <div className="qr-code-placeholder">
          <img
            src="https://as1.ftcdn.net/v2/jpg/05/94/36/64/1000_F_594366491_I3vaOX6ZasBJsZNfuNErXASCcpcsQ1Co.jpg"
            alt="QR Code"
          />
        </div>

        {/* Description below QR code */}
        <p className="qr-description">
          Scan me at a designated container drop-off point and get rewarded.
        </p>
      </div>
    </div>
  );
};

export default ScanQR;
