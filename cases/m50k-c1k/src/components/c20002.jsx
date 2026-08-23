import React from 'react';
const LABEL_20002 = 'component_20002';
export function Component20002({ value = 20002, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20002, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20002, 'data-value': derived.doubled }, children);
}
export default Component20002;
