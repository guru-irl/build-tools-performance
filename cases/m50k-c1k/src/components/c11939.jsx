import React from 'react';
const LABEL_11939 = 'component_11939';
export function Component11939({ value = 11939, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11939, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11939, 'data-value': derived.doubled }, children);
}
export default Component11939;
