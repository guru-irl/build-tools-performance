import React from 'react';
const LABEL_38974 = 'component_38974';
export function Component38974({ value = 38974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38974, 'data-value': derived.doubled }, children);
}
export default Component38974;
