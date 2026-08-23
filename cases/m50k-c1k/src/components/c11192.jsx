import React from 'react';
const LABEL_11192 = 'component_11192';
export function Component11192({ value = 11192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11192, 'data-value': derived.doubled }, children);
}
export default Component11192;
