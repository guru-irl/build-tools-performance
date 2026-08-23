import React from 'react';
const LABEL_16571 = 'component_16571';
export function Component16571({ value = 16571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16571, 'data-value': derived.doubled }, children);
}
export default Component16571;
