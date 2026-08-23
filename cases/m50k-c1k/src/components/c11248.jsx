import React from 'react';
const LABEL_11248 = 'component_11248';
export function Component11248({ value = 11248, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11248, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11248, 'data-value': derived.doubled }, children);
}
export default Component11248;
