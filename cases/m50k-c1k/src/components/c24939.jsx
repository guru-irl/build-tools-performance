import React from 'react';
const LABEL_24939 = 'component_24939';
export function Component24939({ value = 24939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24939, 'data-value': derived.doubled }, children);
}
export default Component24939;
