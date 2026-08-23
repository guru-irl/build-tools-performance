import React from 'react';
const LABEL_16238 = 'component_16238';
export function Component16238({ value = 16238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16238, 'data-value': derived.doubled }, children);
}
export default Component16238;
