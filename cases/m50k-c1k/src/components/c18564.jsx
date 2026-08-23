import React from 'react';
const LABEL_18564 = 'component_18564';
export function Component18564({ value = 18564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18564, 'data-value': derived.doubled }, children);
}
export default Component18564;
