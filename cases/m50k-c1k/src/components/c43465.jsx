import React from 'react';
const LABEL_43465 = 'component_43465';
export function Component43465({ value = 43465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43465, 'data-value': derived.doubled }, children);
}
export default Component43465;
