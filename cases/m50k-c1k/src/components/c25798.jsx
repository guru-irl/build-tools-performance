import React from 'react';
const LABEL_25798 = 'component_25798';
export function Component25798({ value = 25798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25798, 'data-value': derived.doubled }, children);
}
export default Component25798;
