import React from 'react';
const LABEL_24069 = 'component_24069';
export function Component24069({ value = 24069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24069, 'data-value': derived.doubled }, children);
}
export default Component24069;
