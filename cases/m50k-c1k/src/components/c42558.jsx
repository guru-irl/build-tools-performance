import React from 'react';
const LABEL_42558 = 'component_42558';
export function Component42558({ value = 42558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42558, 'data-value': derived.doubled }, children);
}
export default Component42558;
