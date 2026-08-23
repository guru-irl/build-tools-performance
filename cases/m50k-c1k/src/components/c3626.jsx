import React from 'react';
const LABEL_3626 = 'component_3626';
export function Component3626({ value = 3626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3626, 'data-value': derived.doubled }, children);
}
export default Component3626;
