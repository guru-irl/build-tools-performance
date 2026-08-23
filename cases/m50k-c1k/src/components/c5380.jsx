import React from 'react';
const LABEL_5380 = 'component_5380';
export function Component5380({ value = 5380, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5380, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5380, 'data-value': derived.doubled }, children);
}
export default Component5380;
