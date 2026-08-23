import React from 'react';
const LABEL_14478 = 'component_14478';
export function Component14478({ value = 14478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14478, 'data-value': derived.doubled }, children);
}
export default Component14478;
