import React from 'react';
const LABEL_7131 = 'component_7131';
export function Component7131({ value = 7131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7131, 'data-value': derived.doubled }, children);
}
export default Component7131;
