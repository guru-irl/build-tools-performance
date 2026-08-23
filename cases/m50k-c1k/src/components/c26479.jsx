import React from 'react';
const LABEL_26479 = 'component_26479';
export function Component26479({ value = 26479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26479, 'data-value': derived.doubled }, children);
}
export default Component26479;
