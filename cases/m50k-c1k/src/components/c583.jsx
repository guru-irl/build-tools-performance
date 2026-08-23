import React from 'react';
const LABEL_583 = 'component_583';
export function Component583({ value = 583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_583, 'data-value': derived.doubled }, children);
}
export default Component583;
