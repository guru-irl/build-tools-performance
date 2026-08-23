import React from 'react';
const LABEL_26248 = 'component_26248';
export function Component26248({ value = 26248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26248, 'data-value': derived.doubled }, children);
}
export default Component26248;
