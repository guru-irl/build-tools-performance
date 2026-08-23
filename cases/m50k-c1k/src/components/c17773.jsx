import React from 'react';
const LABEL_17773 = 'component_17773';
export function Component17773({ value = 17773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17773, 'data-value': derived.doubled }, children);
}
export default Component17773;
