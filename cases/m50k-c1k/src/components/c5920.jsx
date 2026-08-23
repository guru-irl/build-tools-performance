import React from 'react';
const LABEL_5920 = 'component_5920';
export function Component5920({ value = 5920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5920, 'data-value': derived.doubled }, children);
}
export default Component5920;
