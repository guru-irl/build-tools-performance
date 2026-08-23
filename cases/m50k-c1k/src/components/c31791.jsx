import React from 'react';
const LABEL_31791 = 'component_31791';
export function Component31791({ value = 31791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31791, 'data-value': derived.doubled }, children);
}
export default Component31791;
