import React from 'react';
const LABEL_42411 = 'component_42411';
export function Component42411({ value = 42411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42411, 'data-value': derived.doubled }, children);
}
export default Component42411;
