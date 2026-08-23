import React from 'react';
const LABEL_26469 = 'component_26469';
export function Component26469({ value = 26469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26469, 'data-value': derived.doubled }, children);
}
export default Component26469;
