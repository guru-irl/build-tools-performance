import React from 'react';
const LABEL_13139 = 'component_13139';
export function Component13139({ value = 13139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13139, 'data-value': derived.doubled }, children);
}
export default Component13139;
