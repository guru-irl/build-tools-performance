import React from 'react';
const LABEL_18069 = 'component_18069';
export function Component18069({ value = 18069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18069, 'data-value': derived.doubled }, children);
}
export default Component18069;
