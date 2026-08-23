import React from 'react';
const LABEL_22596 = 'component_22596';
export function Component22596({ value = 22596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22596, 'data-value': derived.doubled }, children);
}
export default Component22596;
