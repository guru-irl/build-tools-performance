import React from 'react';
const LABEL_27305 = 'component_27305';
export function Component27305({ value = 27305, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27305, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27305, 'data-value': derived.doubled }, children);
}
export default Component27305;
