import React from 'react';
const LABEL_18855 = 'component_18855';
export function Component18855({ value = 18855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18855, 'data-value': derived.doubled }, children);
}
export default Component18855;
