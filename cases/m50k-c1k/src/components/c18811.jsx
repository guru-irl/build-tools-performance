import React from 'react';
const LABEL_18811 = 'component_18811';
export function Component18811({ value = 18811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18811, 'data-value': derived.doubled }, children);
}
export default Component18811;
