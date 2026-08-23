import React from 'react';
const LABEL_5069 = 'component_5069';
export function Component5069({ value = 5069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5069, 'data-value': derived.doubled }, children);
}
export default Component5069;
