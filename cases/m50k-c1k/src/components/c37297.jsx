import React from 'react';
const LABEL_37297 = 'component_37297';
export function Component37297({ value = 37297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37297, 'data-value': derived.doubled }, children);
}
export default Component37297;
