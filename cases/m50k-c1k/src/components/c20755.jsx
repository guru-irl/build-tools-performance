import React from 'react';
const LABEL_20755 = 'component_20755';
export function Component20755({ value = 20755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20755, 'data-value': derived.doubled }, children);
}
export default Component20755;
