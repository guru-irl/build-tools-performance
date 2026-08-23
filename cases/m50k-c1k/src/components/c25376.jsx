import React from 'react';
const LABEL_25376 = 'component_25376';
export function Component25376({ value = 25376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25376, 'data-value': derived.doubled }, children);
}
export default Component25376;
