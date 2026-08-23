import React from 'react';
const LABEL_22518 = 'component_22518';
export function Component22518({ value = 22518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22518, 'data-value': derived.doubled }, children);
}
export default Component22518;
