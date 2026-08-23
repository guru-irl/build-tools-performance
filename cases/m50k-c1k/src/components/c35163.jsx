import React from 'react';
const LABEL_35163 = 'component_35163';
export function Component35163({ value = 35163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35163, 'data-value': derived.doubled }, children);
}
export default Component35163;
