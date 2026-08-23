import React from 'react';
const LABEL_43069 = 'component_43069';
export function Component43069({ value = 43069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43069, 'data-value': derived.doubled }, children);
}
export default Component43069;
