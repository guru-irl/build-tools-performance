import React from 'react';
const LABEL_8297 = 'component_8297';
export function Component8297({ value = 8297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8297, 'data-value': derived.doubled }, children);
}
export default Component8297;
