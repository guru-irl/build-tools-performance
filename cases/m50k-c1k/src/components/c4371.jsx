import React from 'react';
const LABEL_4371 = 'component_4371';
export function Component4371({ value = 4371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4371, 'data-value': derived.doubled }, children);
}
export default Component4371;
