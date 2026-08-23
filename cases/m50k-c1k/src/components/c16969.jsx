import React from 'react';
const LABEL_16969 = 'component_16969';
export function Component16969({ value = 16969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16969, 'data-value': derived.doubled }, children);
}
export default Component16969;
