import React from 'react';
const LABEL_14069 = 'component_14069';
export function Component14069({ value = 14069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14069, 'data-value': derived.doubled }, children);
}
export default Component14069;
