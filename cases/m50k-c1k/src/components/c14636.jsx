import React from 'react';
const LABEL_14636 = 'component_14636';
export function Component14636({ value = 14636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14636, 'data-value': derived.doubled }, children);
}
export default Component14636;
