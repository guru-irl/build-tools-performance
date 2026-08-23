import React from 'react';
const LABEL_40438 = 'component_40438';
export function Component40438({ value = 40438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40438, 'data-value': derived.doubled }, children);
}
export default Component40438;
