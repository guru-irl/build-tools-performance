import React from 'react';
const LABEL_8069 = 'component_8069';
export function Component8069({ value = 8069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8069, 'data-value': derived.doubled }, children);
}
export default Component8069;
