import React from 'react';
const LABEL_387 = 'component_387';
export function Component387({ value = 387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_387, 'data-value': derived.doubled }, children);
}
export default Component387;
