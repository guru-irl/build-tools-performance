import React from 'react';
const LABEL_29738 = 'component_29738';
export function Component29738({ value = 29738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29738, 'data-value': derived.doubled }, children);
}
export default Component29738;
