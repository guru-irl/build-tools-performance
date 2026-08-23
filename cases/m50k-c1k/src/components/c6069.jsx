import React from 'react';
const LABEL_6069 = 'component_6069';
export function Component6069({ value = 6069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6069, 'data-value': derived.doubled }, children);
}
export default Component6069;
