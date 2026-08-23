import React from 'react';
const LABEL_36141 = 'component_36141';
export function Component36141({ value = 36141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36141, 'data-value': derived.doubled }, children);
}
export default Component36141;
