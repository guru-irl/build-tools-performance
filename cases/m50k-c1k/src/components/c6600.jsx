import React from 'react';
const LABEL_6600 = 'component_6600';
export function Component6600({ value = 6600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6600, 'data-value': derived.doubled }, children);
}
export default Component6600;
