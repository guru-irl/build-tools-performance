import React from 'react';
const LABEL_6558 = 'component_6558';
export function Component6558({ value = 6558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6558, 'data-value': derived.doubled }, children);
}
export default Component6558;
