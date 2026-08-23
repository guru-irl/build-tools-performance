import React from 'react';
const LABEL_29647 = 'component_29647';
export function Component29647({ value = 29647, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29647, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29647, 'data-value': derived.doubled }, children);
}
export default Component29647;
