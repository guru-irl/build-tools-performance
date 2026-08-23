import React from 'react';
const LABEL_43341 = 'component_43341';
export function Component43341({ value = 43341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43341, 'data-value': derived.doubled }, children);
}
export default Component43341;
