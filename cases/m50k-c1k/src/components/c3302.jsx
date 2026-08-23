import React from 'react';
const LABEL_3302 = 'component_3302';
export function Component3302({ value = 3302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3302, 'data-value': derived.doubled }, children);
}
export default Component3302;
