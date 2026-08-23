import React from 'react';
const LABEL_17063 = 'component_17063';
export function Component17063({ value = 17063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17063, 'data-value': derived.doubled }, children);
}
export default Component17063;
