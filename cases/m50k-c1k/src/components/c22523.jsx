import React from 'react';
const LABEL_22523 = 'component_22523';
export function Component22523({ value = 22523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22523, 'data-value': derived.doubled }, children);
}
export default Component22523;
