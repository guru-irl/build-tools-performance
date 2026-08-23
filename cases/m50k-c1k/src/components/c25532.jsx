import React from 'react';
const LABEL_25532 = 'component_25532';
export function Component25532({ value = 25532, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25532, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25532, 'data-value': derived.doubled }, children);
}
export default Component25532;
