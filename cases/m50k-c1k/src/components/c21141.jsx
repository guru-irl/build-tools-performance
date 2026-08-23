import React from 'react';
const LABEL_21141 = 'component_21141';
export function Component21141({ value = 21141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21141, 'data-value': derived.doubled }, children);
}
export default Component21141;
