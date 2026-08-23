import React from 'react';
const LABEL_26069 = 'component_26069';
export function Component26069({ value = 26069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26069, 'data-value': derived.doubled }, children);
}
export default Component26069;
