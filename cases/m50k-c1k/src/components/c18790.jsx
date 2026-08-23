import React from 'react';
const LABEL_18790 = 'component_18790';
export function Component18790({ value = 18790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18790, 'data-value': derived.doubled }, children);
}
export default Component18790;
