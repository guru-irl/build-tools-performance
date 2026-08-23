import React from 'react';
const LABEL_26718 = 'component_26718';
export function Component26718({ value = 26718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26718, 'data-value': derived.doubled }, children);
}
export default Component26718;
