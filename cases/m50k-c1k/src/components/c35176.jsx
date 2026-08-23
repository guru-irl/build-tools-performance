import React from 'react';
const LABEL_35176 = 'component_35176';
export function Component35176({ value = 35176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35176, 'data-value': derived.doubled }, children);
}
export default Component35176;
