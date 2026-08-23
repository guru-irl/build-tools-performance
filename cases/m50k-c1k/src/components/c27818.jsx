import React from 'react';
const LABEL_27818 = 'component_27818';
export function Component27818({ value = 27818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27818, 'data-value': derived.doubled }, children);
}
export default Component27818;
