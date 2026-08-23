import React from 'react';
const LABEL_17205 = 'component_17205';
export function Component17205({ value = 17205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17205, 'data-value': derived.doubled }, children);
}
export default Component17205;
