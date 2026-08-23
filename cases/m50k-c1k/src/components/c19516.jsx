import React from 'react';
const LABEL_19516 = 'component_19516';
export function Component19516({ value = 19516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19516, 'data-value': derived.doubled }, children);
}
export default Component19516;
