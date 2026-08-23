import React from 'react';
const LABEL_13086 = 'component_13086';
export function Component13086({ value = 13086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13086, 'data-value': derived.doubled }, children);
}
export default Component13086;
