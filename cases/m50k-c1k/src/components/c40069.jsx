import React from 'react';
const LABEL_40069 = 'component_40069';
export function Component40069({ value = 40069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40069, 'data-value': derived.doubled }, children);
}
export default Component40069;
