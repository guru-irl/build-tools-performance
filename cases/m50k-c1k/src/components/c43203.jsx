import React from 'react';
const LABEL_43203 = 'component_43203';
export function Component43203({ value = 43203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43203, 'data-value': derived.doubled }, children);
}
export default Component43203;
