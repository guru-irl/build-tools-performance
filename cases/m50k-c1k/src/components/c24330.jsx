import React from 'react';
const LABEL_24330 = 'component_24330';
export function Component24330({ value = 24330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24330, 'data-value': derived.doubled }, children);
}
export default Component24330;
