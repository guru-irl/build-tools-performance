import React from 'react';
const LABEL_43471 = 'component_43471';
export function Component43471({ value = 43471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43471, 'data-value': derived.doubled }, children);
}
export default Component43471;
