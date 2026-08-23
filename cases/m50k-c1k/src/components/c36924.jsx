import React from 'react';
const LABEL_36924 = 'component_36924';
export function Component36924({ value = 36924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36924, 'data-value': derived.doubled }, children);
}
export default Component36924;
