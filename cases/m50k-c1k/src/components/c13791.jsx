import React from 'react';
const LABEL_13791 = 'component_13791';
export function Component13791({ value = 13791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13791, 'data-value': derived.doubled }, children);
}
export default Component13791;
