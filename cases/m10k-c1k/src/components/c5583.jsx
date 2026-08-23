import React from 'react';
const LABEL_5583 = 'component_5583';
export function Component5583({ value = 5583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5583, 'data-value': derived.doubled }, children);
}
export default Component5583;
