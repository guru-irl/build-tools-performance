import React from 'react';
const LABEL_15713 = 'component_15713';
export function Component15713({ value = 15713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15713, 'data-value': derived.doubled }, children);
}
export default Component15713;
