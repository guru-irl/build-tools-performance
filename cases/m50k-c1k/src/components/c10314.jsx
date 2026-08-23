import React from 'react';
const LABEL_10314 = 'component_10314';
export function Component10314({ value = 10314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10314, 'data-value': derived.doubled }, children);
}
export default Component10314;
