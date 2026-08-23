import React from 'react';
const LABEL_40558 = 'component_40558';
export function Component40558({ value = 40558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40558, 'data-value': derived.doubled }, children);
}
export default Component40558;
