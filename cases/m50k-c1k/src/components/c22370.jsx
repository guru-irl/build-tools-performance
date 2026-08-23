import React from 'react';
const LABEL_22370 = 'component_22370';
export function Component22370({ value = 22370, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22370, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22370, 'data-value': derived.doubled }, children);
}
export default Component22370;
