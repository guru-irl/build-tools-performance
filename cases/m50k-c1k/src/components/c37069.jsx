import React from 'react';
const LABEL_37069 = 'component_37069';
export function Component37069({ value = 37069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37069, 'data-value': derived.doubled }, children);
}
export default Component37069;
