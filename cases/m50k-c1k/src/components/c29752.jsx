import React from 'react';
const LABEL_29752 = 'component_29752';
export function Component29752({ value = 29752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29752, 'data-value': derived.doubled }, children);
}
export default Component29752;
