import React from 'react';
const LABEL_12905 = 'component_12905';
export function Component12905({ value = 12905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12905, 'data-value': derived.doubled }, children);
}
export default Component12905;
