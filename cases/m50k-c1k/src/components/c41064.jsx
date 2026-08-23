import React from 'react';
const LABEL_41064 = 'component_41064';
export function Component41064({ value = 41064, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41064, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41064, 'data-value': derived.doubled }, children);
}
export default Component41064;
