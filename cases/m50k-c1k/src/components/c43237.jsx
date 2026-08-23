import React from 'react';
const LABEL_43237 = 'component_43237';
export function Component43237({ value = 43237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43237, 'data-value': derived.doubled }, children);
}
export default Component43237;
