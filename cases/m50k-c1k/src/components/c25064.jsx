import React from 'react';
const LABEL_25064 = 'component_25064';
export function Component25064({ value = 25064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25064, 'data-value': derived.doubled }, children);
}
export default Component25064;
