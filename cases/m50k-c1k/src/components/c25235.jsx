import React from 'react';
const LABEL_25235 = 'component_25235';
export function Component25235({ value = 25235, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25235, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25235, 'data-value': derived.doubled }, children);
}
export default Component25235;
