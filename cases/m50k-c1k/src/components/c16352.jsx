import React from 'react';
const LABEL_16352 = 'component_16352';
export function Component16352({ value = 16352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16352, 'data-value': derived.doubled }, children);
}
export default Component16352;
