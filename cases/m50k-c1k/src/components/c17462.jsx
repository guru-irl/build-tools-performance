import React from 'react';
const LABEL_17462 = 'component_17462';
export function Component17462({ value = 17462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17462, 'data-value': derived.doubled }, children);
}
export default Component17462;
