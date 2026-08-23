import React from 'react';
const LABEL_10920 = 'component_10920';
export function Component10920({ value = 10920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10920, 'data-value': derived.doubled }, children);
}
export default Component10920;
