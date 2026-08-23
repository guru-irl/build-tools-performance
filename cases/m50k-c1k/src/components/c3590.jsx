import React from 'react';
const LABEL_3590 = 'component_3590';
export function Component3590({ value = 3590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3590, 'data-value': derived.doubled }, children);
}
export default Component3590;
