import React from 'react';
const LABEL_27373 = 'component_27373';
export function Component27373({ value = 27373, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27373, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27373, 'data-value': derived.doubled }, children);
}
export default Component27373;
