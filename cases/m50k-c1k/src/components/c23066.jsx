import React from 'react';
const LABEL_23066 = 'component_23066';
export function Component23066({ value = 23066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23066, 'data-value': derived.doubled }, children);
}
export default Component23066;
