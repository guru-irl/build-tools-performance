import React from 'react';
const LABEL_24850 = 'component_24850';
export function Component24850({ value = 24850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24850, 'data-value': derived.doubled }, children);
}
export default Component24850;
