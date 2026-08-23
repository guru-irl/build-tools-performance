import React from 'react';
const LABEL_11145 = 'component_11145';
export function Component11145({ value = 11145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11145, 'data-value': derived.doubled }, children);
}
export default Component11145;
