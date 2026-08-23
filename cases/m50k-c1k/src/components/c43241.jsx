import React from 'react';
const LABEL_43241 = 'component_43241';
export function Component43241({ value = 43241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43241, 'data-value': derived.doubled }, children);
}
export default Component43241;
