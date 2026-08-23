import React from 'react';
const LABEL_12909 = 'component_12909';
export function Component12909({ value = 12909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12909, 'data-value': derived.doubled }, children);
}
export default Component12909;
