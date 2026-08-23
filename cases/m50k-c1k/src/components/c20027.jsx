import React from 'react';
const LABEL_20027 = 'component_20027';
export function Component20027({ value = 20027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20027, 'data-value': derived.doubled }, children);
}
export default Component20027;
