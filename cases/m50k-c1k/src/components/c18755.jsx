import React from 'react';
const LABEL_18755 = 'component_18755';
export function Component18755({ value = 18755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18755, 'data-value': derived.doubled }, children);
}
export default Component18755;
