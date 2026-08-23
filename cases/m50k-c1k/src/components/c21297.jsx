import React from 'react';
const LABEL_21297 = 'component_21297';
export function Component21297({ value = 21297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21297, 'data-value': derived.doubled }, children);
}
export default Component21297;
