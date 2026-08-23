import React from 'react';
const LABEL_21069 = 'component_21069';
export function Component21069({ value = 21069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21069, 'data-value': derived.doubled }, children);
}
export default Component21069;
