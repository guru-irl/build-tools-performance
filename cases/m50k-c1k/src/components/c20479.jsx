import React from 'react';
const LABEL_20479 = 'component_20479';
export function Component20479({ value = 20479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20479, 'data-value': derived.doubled }, children);
}
export default Component20479;
