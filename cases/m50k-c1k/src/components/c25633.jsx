import React from 'react';
const LABEL_25633 = 'component_25633';
export function Component25633({ value = 25633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25633, 'data-value': derived.doubled }, children);
}
export default Component25633;
