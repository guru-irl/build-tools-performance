import React from 'react';
const LABEL_42574 = 'component_42574';
export function Component42574({ value = 42574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42574, 'data-value': derived.doubled }, children);
}
export default Component42574;
