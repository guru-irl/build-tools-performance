import React from 'react';
const LABEL_30321 = 'component_30321';
export function Component30321({ value = 30321, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30321, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30321, 'data-value': derived.doubled }, children);
}
export default Component30321;
