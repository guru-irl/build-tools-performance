import React from 'react';
const LABEL_33569 = 'component_33569';
export function Component33569({ value = 33569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33569, 'data-value': derived.doubled }, children);
}
export default Component33569;
