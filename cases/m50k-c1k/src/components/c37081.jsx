import React from 'react';
const LABEL_37081 = 'component_37081';
export function Component37081({ value = 37081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37081, 'data-value': derived.doubled }, children);
}
export default Component37081;
