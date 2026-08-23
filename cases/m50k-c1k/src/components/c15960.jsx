import React from 'react';
const LABEL_15960 = 'component_15960';
export function Component15960({ value = 15960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15960, 'data-value': derived.doubled }, children);
}
export default Component15960;
