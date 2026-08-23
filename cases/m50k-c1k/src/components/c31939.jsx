import React from 'react';
const LABEL_31939 = 'component_31939';
export function Component31939({ value = 31939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31939, 'data-value': derived.doubled }, children);
}
export default Component31939;
