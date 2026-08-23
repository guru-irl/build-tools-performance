import React from 'react';
const LABEL_45069 = 'component_45069';
export function Component45069({ value = 45069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45069, 'data-value': derived.doubled }, children);
}
export default Component45069;
