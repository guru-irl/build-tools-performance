import React from 'react';
const LABEL_45818 = 'component_45818';
export function Component45818({ value = 45818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45818, 'data-value': derived.doubled }, children);
}
export default Component45818;
