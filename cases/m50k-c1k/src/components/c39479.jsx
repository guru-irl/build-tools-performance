import React from 'react';
const LABEL_39479 = 'component_39479';
export function Component39479({ value = 39479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39479, 'data-value': derived.doubled }, children);
}
export default Component39479;
