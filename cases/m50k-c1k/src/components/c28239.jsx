import React from 'react';
const LABEL_28239 = 'component_28239';
export function Component28239({ value = 28239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28239, 'data-value': derived.doubled }, children);
}
export default Component28239;
