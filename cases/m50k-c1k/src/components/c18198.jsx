import React from 'react';
const LABEL_18198 = 'component_18198';
export function Component18198({ value = 18198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18198, 'data-value': derived.doubled }, children);
}
export default Component18198;
