import React from 'react';
const LABEL_18370 = 'component_18370';
export function Component18370({ value = 18370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18370, 'data-value': derived.doubled }, children);
}
export default Component18370;
