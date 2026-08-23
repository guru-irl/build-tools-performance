import React from 'react';
const LABEL_21373 = 'component_21373';
export function Component21373({ value = 21373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21373, 'data-value': derived.doubled }, children);
}
export default Component21373;
