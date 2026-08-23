import React from 'react';
const LABEL_20596 = 'component_20596';
export function Component20596({ value = 20596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20596, 'data-value': derived.doubled }, children);
}
export default Component20596;
