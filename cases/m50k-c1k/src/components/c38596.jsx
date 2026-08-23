import React from 'react';
const LABEL_38596 = 'component_38596';
export function Component38596({ value = 38596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38596, 'data-value': derived.doubled }, children);
}
export default Component38596;
