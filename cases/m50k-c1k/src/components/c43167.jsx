import React from 'react';
const LABEL_43167 = 'component_43167';
export function Component43167({ value = 43167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43167, 'data-value': derived.doubled }, children);
}
export default Component43167;
