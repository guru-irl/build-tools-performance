import React from 'react';
const LABEL_39752 = 'component_39752';
export function Component39752({ value = 39752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39752, 'data-value': derived.doubled }, children);
}
export default Component39752;
