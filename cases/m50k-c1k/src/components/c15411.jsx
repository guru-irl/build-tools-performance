import React from 'react';
const LABEL_15411 = 'component_15411';
export function Component15411({ value = 15411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15411, 'data-value': derived.doubled }, children);
}
export default Component15411;
