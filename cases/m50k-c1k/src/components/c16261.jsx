import React from 'react';
const LABEL_16261 = 'component_16261';
export function Component16261({ value = 16261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16261, 'data-value': derived.doubled }, children);
}
export default Component16261;
