import React from 'react';
const LABEL_37372 = 'component_37372';
export function Component37372({ value = 37372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37372, 'data-value': derived.doubled }, children);
}
export default Component37372;
