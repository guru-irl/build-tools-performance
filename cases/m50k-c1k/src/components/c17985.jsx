import React from 'react';
const LABEL_17985 = 'component_17985';
export function Component17985({ value = 17985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17985, 'data-value': derived.doubled }, children);
}
export default Component17985;
