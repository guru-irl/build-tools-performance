import React from 'react';
const LABEL_6939 = 'component_6939';
export function Component6939({ value = 6939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6939, 'data-value': derived.doubled }, children);
}
export default Component6939;
