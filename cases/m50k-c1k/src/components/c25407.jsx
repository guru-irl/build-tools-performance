import React from 'react';
const LABEL_25407 = 'component_25407';
export function Component25407({ value = 25407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25407, 'data-value': derived.doubled }, children);
}
export default Component25407;
