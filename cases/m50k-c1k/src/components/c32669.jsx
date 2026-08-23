import React from 'react';
const LABEL_32669 = 'component_32669';
export function Component32669({ value = 32669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32669, 'data-value': derived.doubled }, children);
}
export default Component32669;
