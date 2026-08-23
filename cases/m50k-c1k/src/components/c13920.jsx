import React from 'react';
const LABEL_13920 = 'component_13920';
export function Component13920({ value = 13920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13920, 'data-value': derived.doubled }, children);
}
export default Component13920;
