import React from 'react';
const LABEL_12069 = 'component_12069';
export function Component12069({ value = 12069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12069, 'data-value': derived.doubled }, children);
}
export default Component12069;
