import React from 'react';
const LABEL_13596 = 'component_13596';
export function Component13596({ value = 13596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13596, 'data-value': derived.doubled }, children);
}
export default Component13596;
