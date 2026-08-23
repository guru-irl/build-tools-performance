import React from 'react';
const LABEL_6798 = 'component_6798';
export function Component6798({ value = 6798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6798, 'data-value': derived.doubled }, children);
}
export default Component6798;
