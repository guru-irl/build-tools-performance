import React from 'react';
const LABEL_21214 = 'component_21214';
export function Component21214({ value = 21214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21214, 'data-value': derived.doubled }, children);
}
export default Component21214;
