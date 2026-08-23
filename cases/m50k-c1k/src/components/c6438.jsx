import React from 'react';
const LABEL_6438 = 'component_6438';
export function Component6438({ value = 6438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6438, 'data-value': derived.doubled }, children);
}
export default Component6438;
