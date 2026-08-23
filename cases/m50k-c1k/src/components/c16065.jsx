import React from 'react';
const LABEL_16065 = 'component_16065';
export function Component16065({ value = 16065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16065, 'data-value': derived.doubled }, children);
}
export default Component16065;
