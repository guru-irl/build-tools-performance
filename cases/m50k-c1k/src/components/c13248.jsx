import React from 'react';
const LABEL_13248 = 'component_13248';
export function Component13248({ value = 13248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13248, 'data-value': derived.doubled }, children);
}
export default Component13248;
