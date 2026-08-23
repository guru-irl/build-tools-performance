import React from 'react';
const LABEL_7251 = 'component_7251';
export function Component7251({ value = 7251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7251, 'data-value': derived.doubled }, children);
}
export default Component7251;
