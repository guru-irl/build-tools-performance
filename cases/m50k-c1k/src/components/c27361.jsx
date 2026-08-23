import React from 'react';
const LABEL_27361 = 'component_27361';
export function Component27361({ value = 27361, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27361, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27361, 'data-value': derived.doubled }, children);
}
export default Component27361;
