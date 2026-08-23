import React from 'react';
const LABEL_16930 = 'component_16930';
export function Component16930({ value = 16930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16930, 'data-value': derived.doubled }, children);
}
export default Component16930;
