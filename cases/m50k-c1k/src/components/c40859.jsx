import React from 'react';
const LABEL_40859 = 'component_40859';
export function Component40859({ value = 40859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40859, 'data-value': derived.doubled }, children);
}
export default Component40859;
