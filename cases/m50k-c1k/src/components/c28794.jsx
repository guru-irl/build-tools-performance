import React from 'react';
const LABEL_28794 = 'component_28794';
export function Component28794({ value = 28794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28794, 'data-value': derived.doubled }, children);
}
export default Component28794;
