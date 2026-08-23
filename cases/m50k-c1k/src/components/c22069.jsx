import React from 'react';
const LABEL_22069 = 'component_22069';
export function Component22069({ value = 22069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22069, 'data-value': derived.doubled }, children);
}
export default Component22069;
