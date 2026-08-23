import React from 'react';
const LABEL_17859 = 'component_17859';
export function Component17859({ value = 17859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17859, 'data-value': derived.doubled }, children);
}
export default Component17859;
