import React from 'react';
const LABEL_15141 = 'component_15141';
export function Component15141({ value = 15141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15141, 'data-value': derived.doubled }, children);
}
export default Component15141;
