import React from 'react';
const LABEL_13435 = 'component_13435';
export function Component13435({ value = 13435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13435, 'data-value': derived.doubled }, children);
}
export default Component13435;
