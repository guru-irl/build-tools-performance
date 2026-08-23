import React from 'react';
const LABEL_3764 = 'component_3764';
export function Component3764({ value = 3764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3764, 'data-value': derived.doubled }, children);
}
export default Component3764;
