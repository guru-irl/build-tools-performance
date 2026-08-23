import React from 'react';
const LABEL_43 = 'component_43';
export function Component43({ value = 43, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43, 'data-value': derived.doubled }, children);
}
export default Component43;
