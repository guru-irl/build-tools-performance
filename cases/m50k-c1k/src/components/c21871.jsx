import React from 'react';
const LABEL_21871 = 'component_21871';
export function Component21871({ value = 21871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21871, 'data-value': derived.doubled }, children);
}
export default Component21871;
