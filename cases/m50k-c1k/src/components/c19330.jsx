import React from 'react';
const LABEL_19330 = 'component_19330';
export function Component19330({ value = 19330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19330, 'data-value': derived.doubled }, children);
}
export default Component19330;
