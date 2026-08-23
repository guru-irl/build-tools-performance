import React from 'react';
const LABEL_37667 = 'component_37667';
export function Component37667({ value = 37667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37667, 'data-value': derived.doubled }, children);
}
export default Component37667;
