import React from 'react';
const LABEL_23387 = 'component_23387';
export function Component23387({ value = 23387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23387, 'data-value': derived.doubled }, children);
}
export default Component23387;
