import React from 'react';
const LABEL_43833 = 'component_43833';
export function Component43833({ value = 43833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43833, 'data-value': derived.doubled }, children);
}
export default Component43833;
