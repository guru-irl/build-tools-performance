import React from 'react';
const LABEL_21868 = 'component_21868';
export function Component21868({ value = 21868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21868, 'data-value': derived.doubled }, children);
}
export default Component21868;
