import React from 'react';
const LABEL_43053 = 'component_43053';
export function Component43053({ value = 43053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43053, 'data-value': derived.doubled }, children);
}
export default Component43053;
