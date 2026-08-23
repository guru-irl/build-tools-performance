import React from 'react';
const LABEL_26791 = 'component_26791';
export function Component26791({ value = 26791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26791, 'data-value': derived.doubled }, children);
}
export default Component26791;
