import React from 'react';
const LABEL_5939 = 'component_5939';
export function Component5939({ value = 5939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5939, 'data-value': derived.doubled }, children);
}
export default Component5939;
