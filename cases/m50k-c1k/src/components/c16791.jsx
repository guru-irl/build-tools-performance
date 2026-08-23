import React from 'react';
const LABEL_16791 = 'component_16791';
export function Component16791({ value = 16791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16791, 'data-value': derived.doubled }, children);
}
export default Component16791;
