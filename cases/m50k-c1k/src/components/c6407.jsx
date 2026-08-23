import React from 'react';
const LABEL_6407 = 'component_6407';
export function Component6407({ value = 6407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6407, 'data-value': derived.doubled }, children);
}
export default Component6407;
