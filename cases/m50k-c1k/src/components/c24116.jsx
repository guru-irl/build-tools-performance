import React from 'react';
const LABEL_24116 = 'component_24116';
export function Component24116({ value = 24116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24116, 'data-value': derived.doubled }, children);
}
export default Component24116;
