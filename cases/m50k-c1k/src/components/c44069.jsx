import React from 'react';
const LABEL_44069 = 'component_44069';
export function Component44069({ value = 44069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44069, 'data-value': derived.doubled }, children);
}
export default Component44069;
