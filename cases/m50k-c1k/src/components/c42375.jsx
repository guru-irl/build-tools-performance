import React from 'react';
const LABEL_42375 = 'component_42375';
export function Component42375({ value = 42375, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42375, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42375, 'data-value': derived.doubled }, children);
}
export default Component42375;
