import React from 'react';
const LABEL_3717 = 'component_3717';
export function Component3717({ value = 3717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3717, 'data-value': derived.doubled }, children);
}
export default Component3717;
