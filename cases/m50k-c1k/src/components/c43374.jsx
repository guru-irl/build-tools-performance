import React from 'react';
const LABEL_43374 = 'component_43374';
export function Component43374({ value = 43374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43374, 'data-value': derived.doubled }, children);
}
export default Component43374;
