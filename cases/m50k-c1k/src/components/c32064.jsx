import React from 'react';
const LABEL_32064 = 'component_32064';
export function Component32064({ value = 32064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32064, 'data-value': derived.doubled }, children);
}
export default Component32064;
