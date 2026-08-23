import React from 'react';
const LABEL_15297 = 'component_15297';
export function Component15297({ value = 15297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15297, 'data-value': derived.doubled }, children);
}
export default Component15297;
