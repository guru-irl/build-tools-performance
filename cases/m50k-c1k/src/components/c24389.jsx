import React from 'react';
const LABEL_24389 = 'component_24389';
export function Component24389({ value = 24389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24389, 'data-value': derived.doubled }, children);
}
export default Component24389;
