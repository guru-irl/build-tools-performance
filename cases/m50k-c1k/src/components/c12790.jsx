import React from 'react';
const LABEL_12790 = 'component_12790';
export function Component12790({ value = 12790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12790, 'data-value': derived.doubled }, children);
}
export default Component12790;
