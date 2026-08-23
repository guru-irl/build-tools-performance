import React from 'react';
const LABEL_24696 = 'component_24696';
export function Component24696({ value = 24696, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24696, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24696, 'data-value': derived.doubled }, children);
}
export default Component24696;
