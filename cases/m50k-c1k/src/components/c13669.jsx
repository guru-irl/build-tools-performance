import React from 'react';
const LABEL_13669 = 'component_13669';
export function Component13669({ value = 13669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13669, 'data-value': derived.doubled }, children);
}
export default Component13669;
