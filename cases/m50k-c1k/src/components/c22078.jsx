import React from 'react';
const LABEL_22078 = 'component_22078';
export function Component22078({ value = 22078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22078, 'data-value': derived.doubled }, children);
}
export default Component22078;
