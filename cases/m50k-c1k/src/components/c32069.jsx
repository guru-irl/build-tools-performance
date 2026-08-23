import React from 'react';
const LABEL_32069 = 'component_32069';
export function Component32069({ value = 32069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32069, 'data-value': derived.doubled }, children);
}
export default Component32069;
