import React from 'react';
const LABEL_18859 = 'component_18859';
export function Component18859({ value = 18859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18859, 'data-value': derived.doubled }, children);
}
export default Component18859;
