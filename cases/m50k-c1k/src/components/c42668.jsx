import React from 'react';
const LABEL_42668 = 'component_42668';
export function Component42668({ value = 42668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42668, 'data-value': derived.doubled }, children);
}
export default Component42668;
