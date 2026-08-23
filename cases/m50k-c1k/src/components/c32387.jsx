import React from 'react';
const LABEL_32387 = 'component_32387';
export function Component32387({ value = 32387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32387, 'data-value': derived.doubled }, children);
}
export default Component32387;
