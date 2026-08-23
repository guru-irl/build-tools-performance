import React from 'react';
const LABEL_9069 = 'component_9069';
export function Component9069({ value = 9069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9069, 'data-value': derived.doubled }, children);
}
export default Component9069;
