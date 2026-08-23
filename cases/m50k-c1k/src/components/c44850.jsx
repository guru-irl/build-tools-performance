import React from 'react';
const LABEL_44850 = 'component_44850';
export function Component44850({ value = 44850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44850, 'data-value': derived.doubled }, children);
}
export default Component44850;
