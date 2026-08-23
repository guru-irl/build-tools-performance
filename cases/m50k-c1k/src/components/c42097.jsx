import React from 'react';
const LABEL_42097 = 'component_42097';
export function Component42097({ value = 42097, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42097, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42097, 'data-value': derived.doubled }, children);
}
export default Component42097;
