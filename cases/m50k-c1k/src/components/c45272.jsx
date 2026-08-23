import React from 'react';
const LABEL_45272 = 'component_45272';
export function Component45272({ value = 45272, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45272, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45272, 'data-value': derived.doubled }, children);
}
export default Component45272;
