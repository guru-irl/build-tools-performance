import React from 'react';
const LABEL_17525 = 'component_17525';
export function Component17525({ value = 17525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17525, 'data-value': derived.doubled }, children);
}
export default Component17525;
