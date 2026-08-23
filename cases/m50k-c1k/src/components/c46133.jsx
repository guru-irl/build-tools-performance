import React from 'react';
const LABEL_46133 = 'component_46133';
export function Component46133({ value = 46133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46133, 'data-value': derived.doubled }, children);
}
export default Component46133;
