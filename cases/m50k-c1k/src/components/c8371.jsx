import React from 'react';
const LABEL_8371 = 'component_8371';
export function Component8371({ value = 8371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8371, 'data-value': derived.doubled }, children);
}
export default Component8371;
