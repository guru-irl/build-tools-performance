import React from 'react';
const LABEL_34800 = 'component_34800';
export function Component34800({ value = 34800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34800, 'data-value': derived.doubled }, children);
}
export default Component34800;
