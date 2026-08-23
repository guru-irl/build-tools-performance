import React from 'react';
const LABEL_30447 = 'component_30447';
export function Component30447({ value = 30447, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30447, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30447, 'data-value': derived.doubled }, children);
}
export default Component30447;
