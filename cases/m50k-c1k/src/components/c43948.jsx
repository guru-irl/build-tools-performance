import React from 'react';
const LABEL_43948 = 'component_43948';
export function Component43948({ value = 43948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43948, 'data-value': derived.doubled }, children);
}
export default Component43948;
