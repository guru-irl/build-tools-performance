import React from 'react';
const LABEL_909 = 'component_909';
export function Component909({ value = 909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_909, 'data-value': derived.doubled }, children);
}
export default Component909;
