import React from 'react';
const LABEL_11069 = 'component_11069';
export function Component11069({ value = 11069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11069, 'data-value': derived.doubled }, children);
}
export default Component11069;
