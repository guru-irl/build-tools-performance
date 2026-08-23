import React from 'react';
const LABEL_18694 = 'component_18694';
export function Component18694({ value = 18694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18694, 'data-value': derived.doubled }, children);
}
export default Component18694;
