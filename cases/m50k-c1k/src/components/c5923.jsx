import React from 'react';
const LABEL_5923 = 'component_5923';
export function Component5923({ value = 5923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5923, 'data-value': derived.doubled }, children);
}
export default Component5923;
