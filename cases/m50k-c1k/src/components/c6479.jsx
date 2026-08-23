import React from 'react';
const LABEL_6479 = 'component_6479';
export function Component6479({ value = 6479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6479, 'data-value': derived.doubled }, children);
}
export default Component6479;
