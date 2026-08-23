import React from 'react';
const LABEL_42832 = 'component_42832';
export function Component42832({ value = 42832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42832, 'data-value': derived.doubled }, children);
}
export default Component42832;
