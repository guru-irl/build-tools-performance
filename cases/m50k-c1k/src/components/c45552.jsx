import React from 'react';
const LABEL_45552 = 'component_45552';
export function Component45552({ value = 45552, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45552, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45552, 'data-value': derived.doubled }, children);
}
export default Component45552;
