import React from 'react';
const LABEL_12903 = 'component_12903';
export function Component12903({ value = 12903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12903, 'data-value': derived.doubled }, children);
}
export default Component12903;
