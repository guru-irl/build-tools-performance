import React from 'react';
const LABEL_18791 = 'component_18791';
export function Component18791({ value = 18791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18791, 'data-value': derived.doubled }, children);
}
export default Component18791;
