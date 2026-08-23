import React from 'react';
const LABEL_15441 = 'component_15441';
export function Component15441({ value = 15441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15441, 'data-value': derived.doubled }, children);
}
export default Component15441;
