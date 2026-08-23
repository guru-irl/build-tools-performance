import React from 'react';
const LABEL_13141 = 'component_13141';
export function Component13141({ value = 13141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13141, 'data-value': derived.doubled }, children);
}
export default Component13141;
