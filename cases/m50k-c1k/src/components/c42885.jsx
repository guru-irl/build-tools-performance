import React from 'react';
const LABEL_42885 = 'component_42885';
export function Component42885({ value = 42885, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42885, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42885, 'data-value': derived.doubled }, children);
}
export default Component42885;
