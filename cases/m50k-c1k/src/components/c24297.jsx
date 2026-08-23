import React from 'react';
const LABEL_24297 = 'component_24297';
export function Component24297({ value = 24297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24297, 'data-value': derived.doubled }, children);
}
export default Component24297;
