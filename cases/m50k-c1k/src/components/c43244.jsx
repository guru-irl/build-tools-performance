import React from 'react';
const LABEL_43244 = 'component_43244';
export function Component43244({ value = 43244, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43244, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43244, 'data-value': derived.doubled }, children);
}
export default Component43244;
