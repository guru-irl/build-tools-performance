import React from 'react';
const LABEL_24490 = 'component_24490';
export function Component24490({ value = 24490, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24490, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24490, 'data-value': derived.doubled }, children);
}
export default Component24490;
