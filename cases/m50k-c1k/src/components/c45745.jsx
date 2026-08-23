import React from 'react';
const LABEL_45745 = 'component_45745';
export function Component45745({ value = 45745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45745, 'data-value': derived.doubled }, children);
}
export default Component45745;
