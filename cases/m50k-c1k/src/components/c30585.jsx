import React from 'react';
const LABEL_30585 = 'component_30585';
export function Component30585({ value = 30585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30585, 'data-value': derived.doubled }, children);
}
export default Component30585;
