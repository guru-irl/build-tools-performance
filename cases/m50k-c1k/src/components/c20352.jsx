import React from 'react';
const LABEL_20352 = 'component_20352';
export function Component20352({ value = 20352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20352, 'data-value': derived.doubled }, children);
}
export default Component20352;
