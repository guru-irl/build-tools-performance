import React from 'react';
const LABEL_25790 = 'component_25790';
export function Component25790({ value = 25790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25790, 'data-value': derived.doubled }, children);
}
export default Component25790;
