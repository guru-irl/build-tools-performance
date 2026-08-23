import React from 'react';
const LABEL_22933 = 'component_22933';
export function Component22933({ value = 22933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22933, 'data-value': derived.doubled }, children);
}
export default Component22933;
