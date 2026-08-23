import React from 'react';
const LABEL_22297 = 'component_22297';
export function Component22297({ value = 22297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22297, 'data-value': derived.doubled }, children);
}
export default Component22297;
