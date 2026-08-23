import React from 'react';
const LABEL_26288 = 'component_26288';
export function Component26288({ value = 26288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26288, 'data-value': derived.doubled }, children);
}
export default Component26288;
