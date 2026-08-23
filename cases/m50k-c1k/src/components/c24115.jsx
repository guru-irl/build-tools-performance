import React from 'react';
const LABEL_24115 = 'component_24115';
export function Component24115({ value = 24115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24115, 'data-value': derived.doubled }, children);
}
export default Component24115;
