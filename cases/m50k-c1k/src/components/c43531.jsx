import React from 'react';
const LABEL_43531 = 'component_43531';
export function Component43531({ value = 43531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43531, 'data-value': derived.doubled }, children);
}
export default Component43531;
