import React from 'react';
const LABEL_40281 = 'component_40281';
export function Component40281({ value = 40281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40281, 'data-value': derived.doubled }, children);
}
export default Component40281;
