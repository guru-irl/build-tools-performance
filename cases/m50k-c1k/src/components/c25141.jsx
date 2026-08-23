import React from 'react';
const LABEL_25141 = 'component_25141';
export function Component25141({ value = 25141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25141, 'data-value': derived.doubled }, children);
}
export default Component25141;
