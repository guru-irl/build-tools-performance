import React from 'react';
const LABEL_45859 = 'component_45859';
export function Component45859({ value = 45859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45859, 'data-value': derived.doubled }, children);
}
export default Component45859;
