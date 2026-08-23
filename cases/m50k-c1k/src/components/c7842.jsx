import React from 'react';
const LABEL_7842 = 'component_7842';
export function Component7842({ value = 7842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7842, 'data-value': derived.doubled }, children);
}
export default Component7842;
