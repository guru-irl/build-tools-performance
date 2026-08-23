import React from 'react';
const LABEL_45300 = 'component_45300';
export function Component45300({ value = 45300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45300, 'data-value': derived.doubled }, children);
}
export default Component45300;
