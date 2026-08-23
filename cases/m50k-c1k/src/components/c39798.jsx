import React from 'react';
const LABEL_39798 = 'component_39798';
export function Component39798({ value = 39798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39798, 'data-value': derived.doubled }, children);
}
export default Component39798;
