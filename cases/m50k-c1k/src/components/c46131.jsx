import React from 'react';
const LABEL_46131 = 'component_46131';
export function Component46131({ value = 46131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46131, 'data-value': derived.doubled }, children);
}
export default Component46131;
