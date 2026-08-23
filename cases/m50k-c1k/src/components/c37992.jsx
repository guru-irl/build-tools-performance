import React from 'react';
const LABEL_37992 = 'component_37992';
export function Component37992({ value = 37992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37992, 'data-value': derived.doubled }, children);
}
export default Component37992;
