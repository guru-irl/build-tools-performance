import React from 'react';
const LABEL_37546 = 'component_37546';
export function Component37546({ value = 37546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37546, 'data-value': derived.doubled }, children);
}
export default Component37546;
