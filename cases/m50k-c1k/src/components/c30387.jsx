import React from 'react';
const LABEL_30387 = 'component_30387';
export function Component30387({ value = 30387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30387, 'data-value': derived.doubled }, children);
}
export default Component30387;
