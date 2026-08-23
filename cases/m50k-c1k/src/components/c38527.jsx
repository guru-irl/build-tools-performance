import React from 'react';
const LABEL_38527 = 'component_38527';
export function Component38527({ value = 38527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38527, 'data-value': derived.doubled }, children);
}
export default Component38527;
