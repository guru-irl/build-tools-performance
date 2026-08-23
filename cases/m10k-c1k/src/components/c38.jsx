import React from 'react';
const LABEL_38 = 'component_38';
export function Component38({ value = 38, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38, 'data-value': derived.doubled }, children);
}
export default Component38;
