import React from 'react';
const LABEL_43575 = 'component_43575';
export function Component43575({ value = 43575, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43575, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43575, 'data-value': derived.doubled }, children);
}
export default Component43575;
