import React from 'react';
const LABEL_29069 = 'component_29069';
export function Component29069({ value = 29069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29069, 'data-value': derived.doubled }, children);
}
export default Component29069;
