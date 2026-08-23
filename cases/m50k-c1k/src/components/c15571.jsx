import React from 'react';
const LABEL_15571 = 'component_15571';
export function Component15571({ value = 15571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15571, 'data-value': derived.doubled }, children);
}
export default Component15571;
