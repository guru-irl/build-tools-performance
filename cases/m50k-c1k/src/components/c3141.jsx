import React from 'react';
const LABEL_3141 = 'component_3141';
export function Component3141({ value = 3141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3141, 'data-value': derived.doubled }, children);
}
export default Component3141;
