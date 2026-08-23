import React from 'react';
const LABEL_15085 = 'component_15085';
export function Component15085({ value = 15085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15085, 'data-value': derived.doubled }, children);
}
export default Component15085;
