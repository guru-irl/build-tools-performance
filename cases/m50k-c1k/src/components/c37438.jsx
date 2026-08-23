import React from 'react';
const LABEL_37438 = 'component_37438';
export function Component37438({ value = 37438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37438, 'data-value': derived.doubled }, children);
}
export default Component37438;
