import React from 'react';
const LABEL_14939 = 'component_14939';
export function Component14939({ value = 14939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14939, 'data-value': derived.doubled }, children);
}
export default Component14939;
