import React from 'react';
const LABEL_8920 = 'component_8920';
export function Component8920({ value = 8920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8920, 'data-value': derived.doubled }, children);
}
export default Component8920;
