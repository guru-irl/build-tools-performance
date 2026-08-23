import React from 'react';
const LABEL_4859 = 'component_4859';
export function Component4859({ value = 4859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4859, 'data-value': derived.doubled }, children);
}
export default Component4859;
