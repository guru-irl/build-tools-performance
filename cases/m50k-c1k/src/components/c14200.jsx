import React from 'react';
const LABEL_14200 = 'component_14200';
export function Component14200({ value = 14200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14200, 'data-value': derived.doubled }, children);
}
export default Component14200;
