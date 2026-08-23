import React from 'react';
const LABEL_30530 = 'component_30530';
export function Component30530({ value = 30530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30530, 'data-value': derived.doubled }, children);
}
export default Component30530;
