import React from 'react';
const LABEL_33141 = 'component_33141';
export function Component33141({ value = 33141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33141, 'data-value': derived.doubled }, children);
}
export default Component33141;
