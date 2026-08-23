import React from 'react';
const LABEL_22229 = 'component_22229';
export function Component22229({ value = 22229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22229, 'data-value': derived.doubled }, children);
}
export default Component22229;
