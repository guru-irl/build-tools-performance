import React from 'react';
const LABEL_46569 = 'component_46569';
export function Component46569({ value = 46569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46569, 'data-value': derived.doubled }, children);
}
export default Component46569;
