import React from 'react';
const LABEL_21908 = 'component_21908';
export function Component21908({ value = 21908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21908, 'data-value': derived.doubled }, children);
}
export default Component21908;
