import React from 'react';
const LABEL_16361 = 'component_16361';
export function Component16361({ value = 16361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16361, 'data-value': derived.doubled }, children);
}
export default Component16361;
