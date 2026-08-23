import React from 'react';
const LABEL_15383 = 'component_15383';
export function Component15383({ value = 15383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15383, 'data-value': derived.doubled }, children);
}
export default Component15383;
