import React from 'react';
const LABEL_16297 = 'component_16297';
export function Component16297({ value = 16297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16297, 'data-value': derived.doubled }, children);
}
export default Component16297;
