import React from 'react';
const LABEL_17387 = 'component_17387';
export function Component17387({ value = 17387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17387, 'data-value': derived.doubled }, children);
}
export default Component17387;
