import React from 'react';
const LABEL_37918 = 'component_37918';
export function Component37918({ value = 37918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37918, 'data-value': derived.doubled }, children);
}
export default Component37918;
