import React from 'react';
const LABEL_17237 = 'component_17237';
export function Component17237({ value = 17237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17237, 'data-value': derived.doubled }, children);
}
export default Component17237;
