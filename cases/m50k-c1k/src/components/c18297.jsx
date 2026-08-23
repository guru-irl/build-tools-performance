import React from 'react';
const LABEL_18297 = 'component_18297';
export function Component18297({ value = 18297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18297, 'data-value': derived.doubled }, children);
}
export default Component18297;
