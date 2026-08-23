import React from 'react';
const LABEL_35248 = 'component_35248';
export function Component35248({ value = 35248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35248, 'data-value': derived.doubled }, children);
}
export default Component35248;
