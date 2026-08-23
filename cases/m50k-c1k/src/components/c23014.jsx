import React from 'react';
const LABEL_23014 = 'component_23014';
export function Component23014({ value = 23014, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23014, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23014, 'data-value': derived.doubled }, children);
}
export default Component23014;
