import React from 'react';
const LABEL_38958 = 'component_38958';
export function Component38958({ value = 38958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38958, 'data-value': derived.doubled }, children);
}
export default Component38958;
