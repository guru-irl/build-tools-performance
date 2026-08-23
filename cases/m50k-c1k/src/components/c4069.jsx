import React from 'react';
const LABEL_4069 = 'component_4069';
export function Component4069({ value = 4069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4069, 'data-value': derived.doubled }, children);
}
export default Component4069;
