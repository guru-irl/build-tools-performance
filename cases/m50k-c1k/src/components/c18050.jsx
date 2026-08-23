import React from 'react';
const LABEL_18050 = 'component_18050';
export function Component18050({ value = 18050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18050, 'data-value': derived.doubled }, children);
}
export default Component18050;
