import React from 'react';
const LABEL_297 = 'component_297';
export function Component297({ value = 297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_297, 'data-value': derived.doubled }, children);
}
export default Component297;
