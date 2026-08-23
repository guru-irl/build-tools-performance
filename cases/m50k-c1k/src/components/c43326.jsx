import React from 'react';
const LABEL_43326 = 'component_43326';
export function Component43326({ value = 43326, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43326, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43326, 'data-value': derived.doubled }, children);
}
export default Component43326;
