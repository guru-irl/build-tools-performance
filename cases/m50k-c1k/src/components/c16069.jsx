import React from 'react';
const LABEL_16069 = 'component_16069';
export function Component16069({ value = 16069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16069, 'data-value': derived.doubled }, children);
}
export default Component16069;
