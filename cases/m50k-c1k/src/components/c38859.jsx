import React from 'react';
const LABEL_38859 = 'component_38859';
export function Component38859({ value = 38859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38859, 'data-value': derived.doubled }, children);
}
export default Component38859;
