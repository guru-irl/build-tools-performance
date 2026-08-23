import React from 'react';
const LABEL_21308 = 'component_21308';
export function Component21308({ value = 21308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21308, 'data-value': derived.doubled }, children);
}
export default Component21308;
