import React from 'react';
const LABEL_26465 = 'component_26465';
export function Component26465({ value = 26465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26465, 'data-value': derived.doubled }, children);
}
export default Component26465;
