import React from 'react';
const LABEL_35550 = 'component_35550';
export function Component35550({ value = 35550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35550, 'data-value': derived.doubled }, children);
}
export default Component35550;
