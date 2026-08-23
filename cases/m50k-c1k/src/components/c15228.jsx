import React from 'react';
const LABEL_15228 = 'component_15228';
export function Component15228({ value = 15228, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15228, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15228, 'data-value': derived.doubled }, children);
}
export default Component15228;
