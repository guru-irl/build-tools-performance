import React from 'react';
const LABEL_16064 = 'component_16064';
export function Component16064({ value = 16064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16064, 'data-value': derived.doubled }, children);
}
export default Component16064;
