import React from 'react';
const LABEL_38975 = 'component_38975';
export function Component38975({ value = 38975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38975, 'data-value': derived.doubled }, children);
}
export default Component38975;
