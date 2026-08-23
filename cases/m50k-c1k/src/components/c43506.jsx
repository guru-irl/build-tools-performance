import React from 'react';
const LABEL_43506 = 'component_43506';
export function Component43506({ value = 43506, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43506, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43506, 'data-value': derived.doubled }, children);
}
export default Component43506;
