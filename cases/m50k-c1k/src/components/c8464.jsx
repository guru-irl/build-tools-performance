import React from 'react';
const LABEL_8464 = 'component_8464';
export function Component8464({ value = 8464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8464, 'data-value': derived.doubled }, children);
}
export default Component8464;
