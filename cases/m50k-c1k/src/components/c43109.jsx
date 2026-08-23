import React from 'react';
const LABEL_43109 = 'component_43109';
export function Component43109({ value = 43109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43109, 'data-value': derived.doubled }, children);
}
export default Component43109;
