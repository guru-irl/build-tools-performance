import React from 'react';
const LABEL_15179 = 'component_15179';
export function Component15179({ value = 15179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15179, 'data-value': derived.doubled }, children);
}
export default Component15179;
