import React from 'react';
const LABEL_43647 = 'component_43647';
export function Component43647({ value = 43647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43647, 'data-value': derived.doubled }, children);
}
export default Component43647;
