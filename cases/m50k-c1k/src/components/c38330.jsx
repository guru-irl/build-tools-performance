import React from 'react';
const LABEL_38330 = 'component_38330';
export function Component38330({ value = 38330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38330, 'data-value': derived.doubled }, children);
}
export default Component38330;
