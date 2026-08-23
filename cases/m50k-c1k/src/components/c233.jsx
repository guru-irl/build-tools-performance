import React from 'react';
const LABEL_233 = 'component_233';
export function Component233({ value = 233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_233, 'data-value': derived.doubled }, children);
}
export default Component233;
