import React from 'react';
const LABEL_18815 = 'component_18815';
export function Component18815({ value = 18815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18815, 'data-value': derived.doubled }, children);
}
export default Component18815;
