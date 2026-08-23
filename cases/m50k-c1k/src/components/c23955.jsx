import React from 'react';
const LABEL_23955 = 'component_23955';
export function Component23955({ value = 23955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23955, 'data-value': derived.doubled }, children);
}
export default Component23955;
