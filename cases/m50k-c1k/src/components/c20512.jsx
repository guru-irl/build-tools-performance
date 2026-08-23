import React from 'react';
const LABEL_20512 = 'component_20512';
export function Component20512({ value = 20512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20512, 'data-value': derived.doubled }, children);
}
export default Component20512;
