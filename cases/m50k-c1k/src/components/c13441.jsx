import React from 'react';
const LABEL_13441 = 'component_13441';
export function Component13441({ value = 13441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13441, 'data-value': derived.doubled }, children);
}
export default Component13441;
