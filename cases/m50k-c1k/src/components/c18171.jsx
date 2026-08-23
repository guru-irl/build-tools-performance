import React from 'react';
const LABEL_18171 = 'component_18171';
export function Component18171({ value = 18171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18171, 'data-value': derived.doubled }, children);
}
export default Component18171;
