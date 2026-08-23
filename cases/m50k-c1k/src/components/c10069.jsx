import React from 'react';
const LABEL_10069 = 'component_10069';
export function Component10069({ value = 10069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10069, 'data-value': derived.doubled }, children);
}
export default Component10069;
