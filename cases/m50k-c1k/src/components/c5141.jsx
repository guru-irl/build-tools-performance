import React from 'react';
const LABEL_5141 = 'component_5141';
export function Component5141({ value = 5141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5141, 'data-value': derived.doubled }, children);
}
export default Component5141;
