import React from 'react';
const LABEL_34093 = 'component_34093';
export function Component34093({ value = 34093, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34093, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34093, 'data-value': derived.doubled }, children);
}
export default Component34093;
