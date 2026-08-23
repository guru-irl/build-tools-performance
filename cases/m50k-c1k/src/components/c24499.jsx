import React from 'react';
const LABEL_24499 = 'component_24499';
export function Component24499({ value = 24499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24499, 'data-value': derived.doubled }, children);
}
export default Component24499;
