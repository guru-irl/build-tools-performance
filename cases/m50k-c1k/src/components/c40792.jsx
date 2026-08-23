import React from 'react';
const LABEL_40792 = 'component_40792';
export function Component40792({ value = 40792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40792, 'data-value': derived.doubled }, children);
}
export default Component40792;
