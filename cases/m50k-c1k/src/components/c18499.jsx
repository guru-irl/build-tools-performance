import React from 'react';
const LABEL_18499 = 'component_18499';
export function Component18499({ value = 18499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18499, 'data-value': derived.doubled }, children);
}
export default Component18499;
