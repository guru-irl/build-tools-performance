import React from 'react';
const LABEL_19329 = 'component_19329';
export function Component19329({ value = 19329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19329, 'data-value': derived.doubled }, children);
}
export default Component19329;
