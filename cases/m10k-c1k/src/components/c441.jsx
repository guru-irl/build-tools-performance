import React from 'react';
const LABEL_441 = 'component_441';
export function Component441({ value = 441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_441, 'data-value': derived.doubled }, children);
}
export default Component441;
