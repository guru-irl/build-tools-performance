import React from 'react';
const LABEL_15195 = 'component_15195';
export function Component15195({ value = 15195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15195, 'data-value': derived.doubled }, children);
}
export default Component15195;
