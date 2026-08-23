import React from 'react';
const LABEL_44484 = 'component_44484';
export function Component44484({ value = 44484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44484, 'data-value': derived.doubled }, children);
}
export default Component44484;
