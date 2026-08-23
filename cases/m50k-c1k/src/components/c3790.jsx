import React from 'react';
const LABEL_3790 = 'component_3790';
export function Component3790({ value = 3790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3790, 'data-value': derived.doubled }, children);
}
export default Component3790;
