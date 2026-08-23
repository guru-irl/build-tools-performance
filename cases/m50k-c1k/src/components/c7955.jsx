import React from 'react';
const LABEL_7955 = 'component_7955';
export function Component7955({ value = 7955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7955, 'data-value': derived.doubled }, children);
}
export default Component7955;
