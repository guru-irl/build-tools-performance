import React from 'react';
const LABEL_35939 = 'component_35939';
export function Component35939({ value = 35939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35939, 'data-value': derived.doubled }, children);
}
export default Component35939;
