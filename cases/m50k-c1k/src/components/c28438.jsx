import React from 'react';
const LABEL_28438 = 'component_28438';
export function Component28438({ value = 28438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28438, 'data-value': derived.doubled }, children);
}
export default Component28438;
