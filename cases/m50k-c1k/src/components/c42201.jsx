import React from 'react';
const LABEL_42201 = 'component_42201';
export function Component42201({ value = 42201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42201, 'data-value': derived.doubled }, children);
}
export default Component42201;
