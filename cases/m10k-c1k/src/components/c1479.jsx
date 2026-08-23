import React from 'react';
const LABEL_1479 = 'component_1479';
export function Component1479({ value = 1479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1479, 'data-value': derived.doubled }, children);
}
export default Component1479;
