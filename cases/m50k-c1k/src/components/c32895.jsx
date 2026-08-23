import React from 'react';
const LABEL_32895 = 'component_32895';
export function Component32895({ value = 32895, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32895, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32895, 'data-value': derived.doubled }, children);
}
export default Component32895;
