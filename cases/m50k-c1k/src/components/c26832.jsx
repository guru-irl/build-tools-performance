import React from 'react';
const LABEL_26832 = 'component_26832';
export function Component26832({ value = 26832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26832, 'data-value': derived.doubled }, children);
}
export default Component26832;
