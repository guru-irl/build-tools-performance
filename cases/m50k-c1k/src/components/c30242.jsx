import React from 'react';
const LABEL_30242 = 'component_30242';
export function Component30242({ value = 30242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30242, 'data-value': derived.doubled }, children);
}
export default Component30242;
