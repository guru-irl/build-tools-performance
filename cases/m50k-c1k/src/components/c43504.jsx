import React from 'react';
const LABEL_43504 = 'component_43504';
export function Component43504({ value = 43504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43504, 'data-value': derived.doubled }, children);
}
export default Component43504;
