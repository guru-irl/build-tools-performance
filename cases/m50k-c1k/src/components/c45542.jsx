import React from 'react';
const LABEL_45542 = 'component_45542';
export function Component45542({ value = 45542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45542, 'data-value': derived.doubled }, children);
}
export default Component45542;
