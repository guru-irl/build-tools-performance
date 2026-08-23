import React from 'react';
const LABEL_26539 = 'component_26539';
export function Component26539({ value = 26539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26539, 'data-value': derived.doubled }, children);
}
export default Component26539;
