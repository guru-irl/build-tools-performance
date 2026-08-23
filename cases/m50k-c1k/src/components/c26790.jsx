import React from 'react';
const LABEL_26790 = 'component_26790';
export function Component26790({ value = 26790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26790, 'data-value': derived.doubled }, children);
}
export default Component26790;
