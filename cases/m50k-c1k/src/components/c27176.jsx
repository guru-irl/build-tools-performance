import React from 'react';
const LABEL_27176 = 'component_27176';
export function Component27176({ value = 27176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27176, 'data-value': derived.doubled }, children);
}
export default Component27176;
