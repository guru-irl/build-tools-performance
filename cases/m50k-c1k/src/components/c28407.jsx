import React from 'react';
const LABEL_28407 = 'component_28407';
export function Component28407({ value = 28407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28407, 'data-value': derived.doubled }, children);
}
export default Component28407;
