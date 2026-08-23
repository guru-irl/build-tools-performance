import React from 'react';
const LABEL_16909 = 'component_16909';
export function Component16909({ value = 16909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16909, 'data-value': derived.doubled }, children);
}
export default Component16909;
