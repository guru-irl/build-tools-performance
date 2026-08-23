import React from 'react';
const LABEL_6351 = 'component_6351';
export function Component6351({ value = 6351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6351, 'data-value': derived.doubled }, children);
}
export default Component6351;
