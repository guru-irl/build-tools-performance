import React from 'react';
const LABEL_3646 = 'component_3646';
export function Component3646({ value = 3646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3646, 'data-value': derived.doubled }, children);
}
export default Component3646;
