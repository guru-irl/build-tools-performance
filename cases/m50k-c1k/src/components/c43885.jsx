import React from 'react';
const LABEL_43885 = 'component_43885';
export function Component43885({ value = 43885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43885, 'data-value': derived.doubled }, children);
}
export default Component43885;
