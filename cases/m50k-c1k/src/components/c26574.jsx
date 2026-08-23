import React from 'react';
const LABEL_26574 = 'component_26574';
export function Component26574({ value = 26574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26574, 'data-value': derived.doubled }, children);
}
export default Component26574;
