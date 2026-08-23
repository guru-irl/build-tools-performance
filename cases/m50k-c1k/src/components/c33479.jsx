import React from 'react';
const LABEL_33479 = 'component_33479';
export function Component33479({ value = 33479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33479, 'data-value': derived.doubled }, children);
}
export default Component33479;
