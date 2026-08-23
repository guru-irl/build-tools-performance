import React from 'react';
const LABEL_18095 = 'component_18095';
export function Component18095({ value = 18095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18095, 'data-value': derived.doubled }, children);
}
export default Component18095;
