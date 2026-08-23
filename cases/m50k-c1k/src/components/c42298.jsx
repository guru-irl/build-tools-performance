import React from 'react';
const LABEL_42298 = 'component_42298';
export function Component42298({ value = 42298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42298, 'data-value': derived.doubled }, children);
}
export default Component42298;
