import React from 'react';
const LABEL_42955 = 'component_42955';
export function Component42955({ value = 42955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42955, 'data-value': derived.doubled }, children);
}
export default Component42955;
