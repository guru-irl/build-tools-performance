import React from 'react';
const LABEL_18154 = 'component_18154';
export function Component18154({ value = 18154, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18154, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18154, 'data-value': derived.doubled }, children);
}
export default Component18154;
