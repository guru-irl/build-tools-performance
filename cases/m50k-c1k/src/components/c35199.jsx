import React from 'react';
const LABEL_35199 = 'component_35199';
export function Component35199({ value = 35199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35199, 'data-value': derived.doubled }, children);
}
export default Component35199;
