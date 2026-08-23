import React from 'react';
const LABEL_13569 = 'component_13569';
export function Component13569({ value = 13569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13569, 'data-value': derived.doubled }, children);
}
export default Component13569;
