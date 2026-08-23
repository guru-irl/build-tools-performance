import React from 'react';
const LABEL_39934 = 'component_39934';
export function Component39934({ value = 39934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39934, 'data-value': derived.doubled }, children);
}
export default Component39934;
