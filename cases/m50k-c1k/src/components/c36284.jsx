import React from 'react';
const LABEL_36284 = 'component_36284';
export function Component36284({ value = 36284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36284, 'data-value': derived.doubled }, children);
}
export default Component36284;
