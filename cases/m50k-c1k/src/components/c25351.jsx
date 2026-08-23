import React from 'react';
const LABEL_25351 = 'component_25351';
export function Component25351({ value = 25351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25351, 'data-value': derived.doubled }, children);
}
export default Component25351;
