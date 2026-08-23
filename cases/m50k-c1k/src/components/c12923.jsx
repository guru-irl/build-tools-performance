import React from 'react';
const LABEL_12923 = 'component_12923';
export function Component12923({ value = 12923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12923, 'data-value': derived.doubled }, children);
}
export default Component12923;
