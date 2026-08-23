import React from 'react';
const LABEL_43955 = 'component_43955';
export function Component43955({ value = 43955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43955, 'data-value': derived.doubled }, children);
}
export default Component43955;
