import React from 'react';
const LABEL_15780 = 'component_15780';
export function Component15780({ value = 15780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15780, 'data-value': derived.doubled }, children);
}
export default Component15780;
