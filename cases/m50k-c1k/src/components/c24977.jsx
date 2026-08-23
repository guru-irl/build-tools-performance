import React from 'react';
const LABEL_24977 = 'component_24977';
export function Component24977({ value = 24977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24977, 'data-value': derived.doubled }, children);
}
export default Component24977;
