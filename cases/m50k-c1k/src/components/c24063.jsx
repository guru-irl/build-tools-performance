import React from 'react';
const LABEL_24063 = 'component_24063';
export function Component24063({ value = 24063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24063, 'data-value': derived.doubled }, children);
}
export default Component24063;
