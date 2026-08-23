import React from 'react';
const LABEL_22141 = 'component_22141';
export function Component22141({ value = 22141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22141, 'data-value': derived.doubled }, children);
}
export default Component22141;
