import React from 'react';
const LABEL_34493 = 'component_34493';
export function Component34493({ value = 34493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34493, 'data-value': derived.doubled }, children);
}
export default Component34493;
