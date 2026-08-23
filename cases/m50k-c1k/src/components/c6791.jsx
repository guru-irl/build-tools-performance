import React from 'react';
const LABEL_6791 = 'component_6791';
export function Component6791({ value = 6791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6791, 'data-value': derived.doubled }, children);
}
export default Component6791;
