import React from 'react';
const LABEL_11179 = 'component_11179';
export function Component11179({ value = 11179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11179, 'data-value': derived.doubled }, children);
}
export default Component11179;
