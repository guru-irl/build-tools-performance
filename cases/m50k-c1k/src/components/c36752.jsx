import React from 'react';
const LABEL_36752 = 'component_36752';
export function Component36752({ value = 36752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36752, 'data-value': derived.doubled }, children);
}
export default Component36752;
