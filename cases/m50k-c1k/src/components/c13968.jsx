import React from 'react';
const LABEL_13968 = 'component_13968';
export function Component13968({ value = 13968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13968, 'data-value': derived.doubled }, children);
}
export default Component13968;
