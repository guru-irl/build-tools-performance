import React from 'react';
const LABEL_32338 = 'component_32338';
export function Component32338({ value = 32338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32338, 'data-value': derived.doubled }, children);
}
export default Component32338;
