import React from 'react';
const LABEL_35085 = 'component_35085';
export function Component35085({ value = 35085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35085, 'data-value': derived.doubled }, children);
}
export default Component35085;
