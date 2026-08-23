import React from 'react';
const LABEL_43274 = 'component_43274';
export function Component43274({ value = 43274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43274, 'data-value': derived.doubled }, children);
}
export default Component43274;
