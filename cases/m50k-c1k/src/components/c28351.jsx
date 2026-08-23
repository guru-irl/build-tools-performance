import React from 'react';
const LABEL_28351 = 'component_28351';
export function Component28351({ value = 28351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28351, 'data-value': derived.doubled }, children);
}
export default Component28351;
