import React from 'react';
const LABEL_3330 = 'component_3330';
export function Component3330({ value = 3330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3330, 'data-value': derived.doubled }, children);
}
export default Component3330;
