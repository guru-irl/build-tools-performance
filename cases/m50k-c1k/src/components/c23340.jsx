import React from 'react';
const LABEL_23340 = 'component_23340';
export function Component23340({ value = 23340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23340, 'data-value': derived.doubled }, children);
}
export default Component23340;
