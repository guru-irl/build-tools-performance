import React from 'react';
const LABEL_35357 = 'component_35357';
export function Component35357({ value = 35357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35357, 'data-value': derived.doubled }, children);
}
export default Component35357;
