import React from 'react';
const LABEL_12776 = 'component_12776';
export function Component12776({ value = 12776, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12776, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12776, 'data-value': derived.doubled }, children);
}
export default Component12776;
