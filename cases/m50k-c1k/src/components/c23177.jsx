import React from 'react';
const LABEL_23177 = 'component_23177';
export function Component23177({ value = 23177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23177, 'data-value': derived.doubled }, children);
}
export default Component23177;
