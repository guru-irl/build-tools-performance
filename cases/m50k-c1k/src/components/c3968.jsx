import React from 'react';
const LABEL_3968 = 'component_3968';
export function Component3968({ value = 3968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3968, 'data-value': derived.doubled }, children);
}
export default Component3968;
