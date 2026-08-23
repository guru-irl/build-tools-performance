import React from 'react';
const LABEL_21387 = 'component_21387';
export function Component21387({ value = 21387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21387, 'data-value': derived.doubled }, children);
}
export default Component21387;
