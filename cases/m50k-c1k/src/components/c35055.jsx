import React from 'react';
const LABEL_35055 = 'component_35055';
export function Component35055({ value = 35055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35055, 'data-value': derived.doubled }, children);
}
export default Component35055;
