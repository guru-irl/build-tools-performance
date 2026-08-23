import React from 'react';
const LABEL_17251 = 'component_17251';
export function Component17251({ value = 17251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17251, 'data-value': derived.doubled }, children);
}
export default Component17251;
