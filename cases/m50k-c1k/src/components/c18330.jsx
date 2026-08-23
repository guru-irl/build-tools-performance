import React from 'react';
const LABEL_18330 = 'component_18330';
export function Component18330({ value = 18330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18330, 'data-value': derived.doubled }, children);
}
export default Component18330;
