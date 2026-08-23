import React from 'react';
const LABEL_43343 = 'component_43343';
export function Component43343({ value = 43343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43343, 'data-value': derived.doubled }, children);
}
export default Component43343;
