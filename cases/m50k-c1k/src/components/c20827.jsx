import React from 'react';
const LABEL_20827 = 'component_20827';
export function Component20827({ value = 20827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20827, 'data-value': derived.doubled }, children);
}
export default Component20827;
