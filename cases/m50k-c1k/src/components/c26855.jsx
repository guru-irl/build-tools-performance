import React from 'react';
const LABEL_26855 = 'component_26855';
export function Component26855({ value = 26855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26855, 'data-value': derived.doubled }, children);
}
export default Component26855;
