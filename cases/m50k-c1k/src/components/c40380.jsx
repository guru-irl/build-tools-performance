import React from 'react';
const LABEL_40380 = 'component_40380';
export function Component40380({ value = 40380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40380, 'data-value': derived.doubled }, children);
}
export default Component40380;
