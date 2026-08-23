import React from 'react';
const LABEL_6222 = 'component_6222';
export function Component6222({ value = 6222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6222, 'data-value': derived.doubled }, children);
}
export default Component6222;
