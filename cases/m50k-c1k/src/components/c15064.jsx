import React from 'react';
const LABEL_15064 = 'component_15064';
export function Component15064({ value = 15064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15064, 'data-value': derived.doubled }, children);
}
export default Component15064;
