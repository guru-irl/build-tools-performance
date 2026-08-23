import React from 'react';
const LABEL_39790 = 'component_39790';
export function Component39790({ value = 39790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39790, 'data-value': derived.doubled }, children);
}
export default Component39790;
