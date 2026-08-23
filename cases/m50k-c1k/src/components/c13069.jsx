import React from 'react';
const LABEL_13069 = 'component_13069';
export function Component13069({ value = 13069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13069, 'data-value': derived.doubled }, children);
}
export default Component13069;
