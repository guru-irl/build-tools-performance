import React from 'react';
const LABEL_20789 = 'component_20789';
export function Component20789({ value = 20789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20789, 'data-value': derived.doubled }, children);
}
export default Component20789;
