import React from 'react';
const LABEL_26833 = 'component_26833';
export function Component26833({ value = 26833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26833, 'data-value': derived.doubled }, children);
}
export default Component26833;
