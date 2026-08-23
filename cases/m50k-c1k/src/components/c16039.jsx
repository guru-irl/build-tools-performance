import React from 'react';
const LABEL_16039 = 'component_16039';
export function Component16039({ value = 16039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16039, 'data-value': derived.doubled }, children);
}
export default Component16039;
