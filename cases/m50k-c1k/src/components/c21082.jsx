import React from 'react';
const LABEL_21082 = 'component_21082';
export function Component21082({ value = 21082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21082, 'data-value': derived.doubled }, children);
}
export default Component21082;
