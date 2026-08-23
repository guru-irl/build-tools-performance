import React from 'react';
const LABEL_13100 = 'component_13100';
export function Component13100({ value = 13100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13100, 'data-value': derived.doubled }, children);
}
export default Component13100;
