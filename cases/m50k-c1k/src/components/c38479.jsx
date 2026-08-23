import React from 'react';
const LABEL_38479 = 'component_38479';
export function Component38479({ value = 38479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38479, 'data-value': derived.doubled }, children);
}
export default Component38479;
