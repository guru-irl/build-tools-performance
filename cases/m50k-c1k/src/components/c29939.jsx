import React from 'react';
const LABEL_29939 = 'component_29939';
export function Component29939({ value = 29939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29939, 'data-value': derived.doubled }, children);
}
export default Component29939;
