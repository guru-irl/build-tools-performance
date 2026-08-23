import React from 'react';
const LABEL_42045 = 'component_42045';
export function Component42045({ value = 42045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42045, 'data-value': derived.doubled }, children);
}
export default Component42045;
