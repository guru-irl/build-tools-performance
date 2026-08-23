import React from 'react';
const LABEL_35297 = 'component_35297';
export function Component35297({ value = 35297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35297, 'data-value': derived.doubled }, children);
}
export default Component35297;
