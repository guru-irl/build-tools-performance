import React from 'react';
const LABEL_39766 = 'component_39766';
export function Component39766({ value = 39766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39766, 'data-value': derived.doubled }, children);
}
export default Component39766;
