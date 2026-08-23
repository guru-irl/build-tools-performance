import React from 'react';
const LABEL_2064 = 'component_2064';
export function Component2064({ value = 2064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2064, 'data-value': derived.doubled }, children);
}
export default Component2064;
