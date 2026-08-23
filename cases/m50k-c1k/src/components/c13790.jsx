import React from 'react';
const LABEL_13790 = 'component_13790';
export function Component13790({ value = 13790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13790, 'data-value': derived.doubled }, children);
}
export default Component13790;
