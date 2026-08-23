import React from 'react';
const LABEL_35061 = 'component_35061';
export function Component35061({ value = 35061, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35061, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35061, 'data-value': derived.doubled }, children);
}
export default Component35061;
