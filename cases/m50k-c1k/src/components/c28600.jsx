import React from 'react';
const LABEL_28600 = 'component_28600';
export function Component28600({ value = 28600, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28600, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28600, 'data-value': derived.doubled }, children);
}
export default Component28600;
