import React from 'react';
const LABEL_25807 = 'component_25807';
export function Component25807({ value = 25807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25807, 'data-value': derived.doubled }, children);
}
export default Component25807;
