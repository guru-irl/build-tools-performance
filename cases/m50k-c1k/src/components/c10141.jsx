import React from 'react';
const LABEL_10141 = 'component_10141';
export function Component10141({ value = 10141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10141, 'data-value': derived.doubled }, children);
}
export default Component10141;
