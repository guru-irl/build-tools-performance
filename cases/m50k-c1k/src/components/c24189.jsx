import React from 'react';
const LABEL_24189 = 'component_24189';
export function Component24189({ value = 24189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24189, 'data-value': derived.doubled }, children);
}
export default Component24189;
