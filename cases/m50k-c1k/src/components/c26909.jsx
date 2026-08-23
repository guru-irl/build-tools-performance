import React from 'react';
const LABEL_26909 = 'component_26909';
export function Component26909({ value = 26909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26909, 'data-value': derived.doubled }, children);
}
export default Component26909;
