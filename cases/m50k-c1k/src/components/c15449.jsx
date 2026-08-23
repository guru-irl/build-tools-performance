import React from 'react';
const LABEL_15449 = 'component_15449';
export function Component15449({ value = 15449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15449, 'data-value': derived.doubled }, children);
}
export default Component15449;
