import React from 'react';
const LABEL_10441 = 'component_10441';
export function Component10441({ value = 10441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10441, 'data-value': derived.doubled }, children);
}
export default Component10441;
