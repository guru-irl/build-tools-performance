import React from 'react';
const LABEL_43924 = 'component_43924';
export function Component43924({ value = 43924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43924, 'data-value': derived.doubled }, children);
}
export default Component43924;
