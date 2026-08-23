import React from 'react';
const LABEL_27173 = 'component_27173';
export function Component27173({ value = 27173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27173, 'data-value': derived.doubled }, children);
}
export default Component27173;
