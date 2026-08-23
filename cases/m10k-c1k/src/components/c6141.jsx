import React from 'react';
const LABEL_6141 = 'component_6141';
export function Component6141({ value = 6141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6141, 'data-value': derived.doubled }, children);
}
export default Component6141;
