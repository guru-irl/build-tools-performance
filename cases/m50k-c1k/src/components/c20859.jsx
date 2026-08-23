import React from 'react';
const LABEL_20859 = 'component_20859';
export function Component20859({ value = 20859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20859, 'data-value': derived.doubled }, children);
}
export default Component20859;
