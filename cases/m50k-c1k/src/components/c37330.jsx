import React from 'react';
const LABEL_37330 = 'component_37330';
export function Component37330({ value = 37330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37330, 'data-value': derived.doubled }, children);
}
export default Component37330;
