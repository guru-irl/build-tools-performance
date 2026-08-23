import React from 'react';
const LABEL_24614 = 'component_24614';
export function Component24614({ value = 24614, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24614, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24614, 'data-value': derived.doubled }, children);
}
export default Component24614;
