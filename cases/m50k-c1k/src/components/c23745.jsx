import React from 'react';
const LABEL_23745 = 'component_23745';
export function Component23745({ value = 23745, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23745, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23745, 'data-value': derived.doubled }, children);
}
export default Component23745;
