import React from 'react';
const LABEL_19243 = 'component_19243';
export function Component19243({ value = 19243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19243, 'data-value': derived.doubled }, children);
}
export default Component19243;
