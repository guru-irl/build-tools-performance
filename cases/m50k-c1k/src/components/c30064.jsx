import React from 'react';
const LABEL_30064 = 'component_30064';
export function Component30064({ value = 30064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30064, 'data-value': derived.doubled }, children);
}
export default Component30064;
