import React from 'react';
const LABEL_30296 = 'component_30296';
export function Component30296({ value = 30296, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30296, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30296, 'data-value': derived.doubled }, children);
}
export default Component30296;
