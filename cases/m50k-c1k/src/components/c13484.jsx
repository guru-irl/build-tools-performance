import React from 'react';
const LABEL_13484 = 'component_13484';
export function Component13484({ value = 13484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13484, 'data-value': derived.doubled }, children);
}
export default Component13484;
