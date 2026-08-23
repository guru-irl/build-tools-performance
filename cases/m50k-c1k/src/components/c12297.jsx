import React from 'react';
const LABEL_12297 = 'component_12297';
export function Component12297({ value = 12297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12297, 'data-value': derived.doubled }, children);
}
export default Component12297;
