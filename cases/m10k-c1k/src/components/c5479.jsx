import React from 'react';
const LABEL_5479 = 'component_5479';
export function Component5479({ value = 5479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5479, 'data-value': derived.doubled }, children);
}
export default Component5479;
