import React from 'react';
const LABEL_36465 = 'component_36465';
export function Component36465({ value = 36465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36465, 'data-value': derived.doubled }, children);
}
export default Component36465;
