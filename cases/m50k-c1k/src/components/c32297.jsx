import React from 'react';
const LABEL_32297 = 'component_32297';
export function Component32297({ value = 32297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32297, 'data-value': derived.doubled }, children);
}
export default Component32297;
