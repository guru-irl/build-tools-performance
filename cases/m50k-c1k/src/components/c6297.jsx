import React from 'react';
const LABEL_6297 = 'component_6297';
export function Component6297({ value = 6297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6297, 'data-value': derived.doubled }, children);
}
export default Component6297;
