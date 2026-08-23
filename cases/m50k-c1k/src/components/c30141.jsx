import React from 'react';
const LABEL_30141 = 'component_30141';
export function Component30141({ value = 30141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30141, 'data-value': derived.doubled }, children);
}
export default Component30141;
