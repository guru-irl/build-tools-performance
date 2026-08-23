import React from 'react';
const LABEL_12180 = 'component_12180';
export function Component12180({ value = 12180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12180, 'data-value': derived.doubled }, children);
}
export default Component12180;
