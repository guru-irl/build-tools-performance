import React from 'react';
const LABEL_36362 = 'component_36362';
export function Component36362({ value = 36362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36362, 'data-value': derived.doubled }, children);
}
export default Component36362;
