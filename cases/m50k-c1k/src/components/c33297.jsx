import React from 'react';
const LABEL_33297 = 'component_33297';
export function Component33297({ value = 33297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33297, 'data-value': derived.doubled }, children);
}
export default Component33297;
