import React from 'react';
const LABEL_20069 = 'component_20069';
export function Component20069({ value = 20069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20069, 'data-value': derived.doubled }, children);
}
export default Component20069;
