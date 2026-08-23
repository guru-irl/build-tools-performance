import React from 'react';
const LABEL_12131 = 'component_12131';
export function Component12131({ value = 12131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12131, 'data-value': derived.doubled }, children);
}
export default Component12131;
