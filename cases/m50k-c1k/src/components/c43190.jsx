import React from 'react';
const LABEL_43190 = 'component_43190';
export function Component43190({ value = 43190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43190, 'data-value': derived.doubled }, children);
}
export default Component43190;
