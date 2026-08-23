import React from 'react';
const LABEL_43476 = 'component_43476';
export function Component43476({ value = 43476, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43476, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43476, 'data-value': derived.doubled }, children);
}
export default Component43476;
