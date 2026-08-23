import React from 'react';
const LABEL_44790 = 'component_44790';
export function Component44790({ value = 44790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44790, 'data-value': derived.doubled }, children);
}
export default Component44790;
