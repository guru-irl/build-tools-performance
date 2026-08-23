import React from 'react';
const LABEL_24158 = 'component_24158';
export function Component24158({ value = 24158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24158, 'data-value': derived.doubled }, children);
}
export default Component24158;
