import React from 'react';
const LABEL_8438 = 'component_8438';
export function Component8438({ value = 8438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8438, 'data-value': derived.doubled }, children);
}
export default Component8438;
