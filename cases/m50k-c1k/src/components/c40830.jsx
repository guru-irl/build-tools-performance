import React from 'react';
const LABEL_40830 = 'component_40830';
export function Component40830({ value = 40830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40830, 'data-value': derived.doubled }, children);
}
export default Component40830;
