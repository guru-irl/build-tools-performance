import React from 'react';
const LABEL_600 = 'component_600';
export function Component600({ value = 600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_600, 'data-value': derived.doubled }, children);
}
export default Component600;
