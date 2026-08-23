import React from 'react';
const LABEL_6076 = 'component_6076';
export function Component6076({ value = 6076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6076, 'data-value': derived.doubled }, children);
}
export default Component6076;
