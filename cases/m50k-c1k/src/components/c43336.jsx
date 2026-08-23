import React from 'react';
const LABEL_43336 = 'component_43336';
export function Component43336({ value = 43336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43336, 'data-value': derived.doubled }, children);
}
export default Component43336;
