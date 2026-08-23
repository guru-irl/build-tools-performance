import React from 'react';
const LABEL_15688 = 'component_15688';
export function Component15688({ value = 15688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15688, 'data-value': derived.doubled }, children);
}
export default Component15688;
