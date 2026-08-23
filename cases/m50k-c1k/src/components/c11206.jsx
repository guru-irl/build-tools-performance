import React from 'react';
const LABEL_11206 = 'component_11206';
export function Component11206({ value = 11206, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11206, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11206, 'data-value': derived.doubled }, children);
}
export default Component11206;
