import React from 'react';
const LABEL_38069 = 'component_38069';
export function Component38069({ value = 38069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38069, 'data-value': derived.doubled }, children);
}
export default Component38069;
