import React from 'react';
const LABEL_45258 = 'component_45258';
export function Component45258({ value = 45258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45258, 'data-value': derived.doubled }, children);
}
export default Component45258;
