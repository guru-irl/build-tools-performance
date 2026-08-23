import React from 'react';
const LABEL_28920 = 'component_28920';
export function Component28920({ value = 28920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28920, 'data-value': derived.doubled }, children);
}
export default Component28920;
