import React from 'react';
const LABEL_35479 = 'component_35479';
export function Component35479({ value = 35479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35479, 'data-value': derived.doubled }, children);
}
export default Component35479;
