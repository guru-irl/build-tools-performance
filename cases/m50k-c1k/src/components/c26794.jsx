import React from 'react';
const LABEL_26794 = 'component_26794';
export function Component26794({ value = 26794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26794, 'data-value': derived.doubled }, children);
}
export default Component26794;
