import React from 'react';
const LABEL_26011 = 'component_26011';
export function Component26011({ value = 26011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26011, 'data-value': derived.doubled }, children);
}
export default Component26011;
