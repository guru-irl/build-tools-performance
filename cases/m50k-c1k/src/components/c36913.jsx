import React from 'react';
const LABEL_36913 = 'component_36913';
export function Component36913({ value = 36913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36913, 'data-value': derived.doubled }, children);
}
export default Component36913;
