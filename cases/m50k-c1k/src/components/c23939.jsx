import React from 'react';
const LABEL_23939 = 'component_23939';
export function Component23939({ value = 23939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23939, 'data-value': derived.doubled }, children);
}
export default Component23939;
