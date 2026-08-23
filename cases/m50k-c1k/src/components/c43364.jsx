import React from 'react';
const LABEL_43364 = 'component_43364';
export function Component43364({ value = 43364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43364, 'data-value': derived.doubled }, children);
}
export default Component43364;
