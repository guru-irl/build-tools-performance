import React from 'react';
const LABEL_31064 = 'component_31064';
export function Component31064({ value = 31064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31064, 'data-value': derived.doubled }, children);
}
export default Component31064;
