import React from 'react';
const LABEL_35612 = 'component_35612';
export function Component35612({ value = 35612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35612, 'data-value': derived.doubled }, children);
}
export default Component35612;
