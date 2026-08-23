import React from 'react';
const LABEL_3362 = 'component_3362';
export function Component3362({ value = 3362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3362, 'data-value': derived.doubled }, children);
}
export default Component3362;
