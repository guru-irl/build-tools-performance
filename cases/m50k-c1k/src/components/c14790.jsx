import React from 'react';
const LABEL_14790 = 'component_14790';
export function Component14790({ value = 14790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14790, 'data-value': derived.doubled }, children);
}
export default Component14790;
