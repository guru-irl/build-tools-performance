import React from 'react';
const LABEL_33403 = 'component_33403';
export function Component33403({ value = 33403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33403, 'data-value': derived.doubled }, children);
}
export default Component33403;
