import React from 'react';
const LABEL_12305 = 'component_12305';
export function Component12305({ value = 12305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12305, 'data-value': derived.doubled }, children);
}
export default Component12305;
