import React from 'react';
const LABEL_40422 = 'component_40422';
export function Component40422({ value = 40422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40422, 'data-value': derived.doubled }, children);
}
export default Component40422;
