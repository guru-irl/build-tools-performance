import React from 'react';
const LABEL_28069 = 'component_28069';
export function Component28069({ value = 28069, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28069, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28069, 'data-value': derived.doubled }, children);
}
export default Component28069;
