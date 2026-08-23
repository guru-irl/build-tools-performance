import React from 'react';
const LABEL_18648 = 'component_18648';
export function Component18648({ value = 18648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18648, 'data-value': derived.doubled }, children);
}
export default Component18648;
