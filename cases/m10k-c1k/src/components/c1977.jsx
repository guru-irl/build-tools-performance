import React from 'react';
const LABEL_1977 = 'component_1977';
export function Component1977({ value = 1977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1977, 'data-value': derived.doubled }, children);
}
export default Component1977;
