import React from 'react';
const LABEL_13494 = 'component_13494';
export function Component13494({ value = 13494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13494, 'data-value': derived.doubled }, children);
}
export default Component13494;
