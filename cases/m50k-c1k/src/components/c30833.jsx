import React from 'react';
const LABEL_30833 = 'component_30833';
export function Component30833({ value = 30833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30833, 'data-value': derived.doubled }, children);
}
export default Component30833;
