import React from 'react';
const LABEL_18431 = 'component_18431';
export function Component18431({ value = 18431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18431, 'data-value': derived.doubled }, children);
}
export default Component18431;
