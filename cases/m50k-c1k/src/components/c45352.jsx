import React from 'react';
const LABEL_45352 = 'component_45352';
export function Component45352({ value = 45352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45352, 'data-value': derived.doubled }, children);
}
export default Component45352;
