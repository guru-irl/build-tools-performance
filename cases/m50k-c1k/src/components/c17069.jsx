import React from 'react';
const LABEL_17069 = 'component_17069';
export function Component17069({ value = 17069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17069, 'data-value': derived.doubled }, children);
}
export default Component17069;
