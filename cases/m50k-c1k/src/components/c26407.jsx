import React from 'react';
const LABEL_26407 = 'component_26407';
export function Component26407({ value = 26407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26407, 'data-value': derived.doubled }, children);
}
export default Component26407;
