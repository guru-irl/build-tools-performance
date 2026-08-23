import React from 'react';
const LABEL_28593 = 'component_28593';
export function Component28593({ value = 28593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28593, 'data-value': derived.doubled }, children);
}
export default Component28593;
