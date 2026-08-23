import React from 'react';
const LABEL_5859 = 'component_5859';
export function Component5859({ value = 5859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5859, 'data-value': derived.doubled }, children);
}
export default Component5859;
