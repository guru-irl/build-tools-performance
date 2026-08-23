import React from 'react';
const LABEL_43874 = 'component_43874';
export function Component43874({ value = 43874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43874, 'data-value': derived.doubled }, children);
}
export default Component43874;
