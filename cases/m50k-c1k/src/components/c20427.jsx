import React from 'react';
const LABEL_20427 = 'component_20427';
export function Component20427({ value = 20427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20427, 'data-value': derived.doubled }, children);
}
export default Component20427;
