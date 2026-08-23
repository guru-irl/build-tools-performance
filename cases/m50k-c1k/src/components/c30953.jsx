import React from 'react';
const LABEL_30953 = 'component_30953';
export function Component30953({ value = 30953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30953, 'data-value': derived.doubled }, children);
}
export default Component30953;
