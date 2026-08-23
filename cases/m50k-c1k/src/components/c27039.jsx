import React from 'react';
const LABEL_27039 = 'component_27039';
export function Component27039({ value = 27039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27039, 'data-value': derived.doubled }, children);
}
export default Component27039;
