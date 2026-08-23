import React from 'react';
const LABEL_26596 = 'component_26596';
export function Component26596({ value = 26596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26596, 'data-value': derived.doubled }, children);
}
export default Component26596;
