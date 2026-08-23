import React from 'react';
const LABEL_33798 = 'component_33798';
export function Component33798({ value = 33798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33798, 'data-value': derived.doubled }, children);
}
export default Component33798;
