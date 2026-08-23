import React from 'react';
const LABEL_36873 = 'component_36873';
export function Component36873({ value = 36873, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36873, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36873, 'data-value': derived.doubled }, children);
}
export default Component36873;
