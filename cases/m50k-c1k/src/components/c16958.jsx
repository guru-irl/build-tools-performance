import React from 'react';
const LABEL_16958 = 'component_16958';
export function Component16958({ value = 16958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16958, 'data-value': derived.doubled }, children);
}
export default Component16958;
