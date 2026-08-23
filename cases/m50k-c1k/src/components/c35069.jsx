import React from 'react';
const LABEL_35069 = 'component_35069';
export function Component35069({ value = 35069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35069, 'data-value': derived.doubled }, children);
}
export default Component35069;
