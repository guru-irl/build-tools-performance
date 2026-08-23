import React from 'react';
const LABEL_43112 = 'component_43112';
export function Component43112({ value = 43112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43112, 'data-value': derived.doubled }, children);
}
export default Component43112;
