import React from 'react';
const LABEL_6534 = 'component_6534';
export function Component6534({ value = 6534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6534, 'data-value': derived.doubled }, children);
}
export default Component6534;
