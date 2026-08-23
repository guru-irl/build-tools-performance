import React from 'react';
const LABEL_2141 = 'component_2141';
export function Component2141({ value = 2141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2141, 'data-value': derived.doubled }, children);
}
export default Component2141;
