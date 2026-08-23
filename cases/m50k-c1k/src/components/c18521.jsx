import React from 'react';
const LABEL_18521 = 'component_18521';
export function Component18521({ value = 18521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18521, 'data-value': derived.doubled }, children);
}
export default Component18521;
