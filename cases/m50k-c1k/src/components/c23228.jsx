import React from 'react';
const LABEL_23228 = 'component_23228';
export function Component23228({ value = 23228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23228, 'data-value': derived.doubled }, children);
}
export default Component23228;
