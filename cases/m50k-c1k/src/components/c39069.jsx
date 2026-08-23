import React from 'react';
const LABEL_39069 = 'component_39069';
export function Component39069({ value = 39069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39069, 'data-value': derived.doubled }, children);
}
export default Component39069;
