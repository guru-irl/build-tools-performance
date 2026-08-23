import React from 'react';
const LABEL_40189 = 'component_40189';
export function Component40189({ value = 40189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40189, 'data-value': derived.doubled }, children);
}
export default Component40189;
