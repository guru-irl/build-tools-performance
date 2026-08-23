import React from 'react';
const LABEL_43913 = 'component_43913';
export function Component43913({ value = 43913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43913, 'data-value': derived.doubled }, children);
}
export default Component43913;
