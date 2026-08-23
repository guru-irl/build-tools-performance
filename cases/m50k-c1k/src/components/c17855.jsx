import React from 'react';
const LABEL_17855 = 'component_17855';
export function Component17855({ value = 17855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17855, 'data-value': derived.doubled }, children);
}
export default Component17855;
