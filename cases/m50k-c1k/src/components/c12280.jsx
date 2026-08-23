import React from 'react';
const LABEL_12280 = 'component_12280';
export function Component12280({ value = 12280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12280, 'data-value': derived.doubled }, children);
}
export default Component12280;
