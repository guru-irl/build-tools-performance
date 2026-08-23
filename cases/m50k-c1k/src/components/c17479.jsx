import React from 'react';
const LABEL_17479 = 'component_17479';
export function Component17479({ value = 17479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17479, 'data-value': derived.doubled }, children);
}
export default Component17479;
