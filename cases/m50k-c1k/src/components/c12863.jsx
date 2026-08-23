import React from 'react';
const LABEL_12863 = 'component_12863';
export function Component12863({ value = 12863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12863, 'data-value': derived.doubled }, children);
}
export default Component12863;
