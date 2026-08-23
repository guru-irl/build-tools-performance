import React from 'react';
const LABEL_31398 = 'component_31398';
export function Component31398({ value = 31398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31398, 'data-value': derived.doubled }, children);
}
export default Component31398;
