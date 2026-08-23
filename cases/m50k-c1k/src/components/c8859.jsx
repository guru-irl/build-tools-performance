import React from 'react';
const LABEL_8859 = 'component_8859';
export function Component8859({ value = 8859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8859, 'data-value': derived.doubled }, children);
}
export default Component8859;
