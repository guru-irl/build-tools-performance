import React from 'react';
const LABEL_40497 = 'component_40497';
export function Component40497({ value = 40497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40497, 'data-value': derived.doubled }, children);
}
export default Component40497;
