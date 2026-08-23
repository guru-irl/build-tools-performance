import React from 'react';
const LABEL_1069 = 'component_1069';
export function Component1069({ value = 1069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1069, 'data-value': derived.doubled }, children);
}
export default Component1069;
