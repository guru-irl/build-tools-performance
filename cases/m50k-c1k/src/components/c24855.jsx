import React from 'react';
const LABEL_24855 = 'component_24855';
export function Component24855({ value = 24855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24855, 'data-value': derived.doubled }, children);
}
export default Component24855;
