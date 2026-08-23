import React from 'react';
const LABEL_20297 = 'component_20297';
export function Component20297({ value = 20297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20297, 'data-value': derived.doubled }, children);
}
export default Component20297;
