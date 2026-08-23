import React from 'react';
const LABEL_15069 = 'component_15069';
export function Component15069({ value = 15069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15069, 'data-value': derived.doubled }, children);
}
export default Component15069;
