import React from 'react';
const LABEL_18387 = 'component_18387';
export function Component18387({ value = 18387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18387, 'data-value': derived.doubled }, children);
}
export default Component18387;
