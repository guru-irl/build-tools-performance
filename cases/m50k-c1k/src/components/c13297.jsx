import React from 'react';
const LABEL_13297 = 'component_13297';
export function Component13297({ value = 13297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13297, 'data-value': derived.doubled }, children);
}
export default Component13297;
