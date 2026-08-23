import React from 'react';
const LABEL_5063 = 'component_5063';
export function Component5063({ value = 5063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5063, 'data-value': derived.doubled }, children);
}
export default Component5063;
