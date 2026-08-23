import React from 'react';
const LABEL_18992 = 'component_18992';
export function Component18992({ value = 18992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18992, 'data-value': derived.doubled }, children);
}
export default Component18992;
