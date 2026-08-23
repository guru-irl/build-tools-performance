import React from 'react';
const LABEL_15706 = 'component_15706';
export function Component15706({ value = 15706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15706, 'data-value': derived.doubled }, children);
}
export default Component15706;
