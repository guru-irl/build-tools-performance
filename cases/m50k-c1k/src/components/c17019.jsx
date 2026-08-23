import React from 'react';
const LABEL_17019 = 'component_17019';
export function Component17019({ value = 17019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17019, 'data-value': derived.doubled }, children);
}
export default Component17019;
