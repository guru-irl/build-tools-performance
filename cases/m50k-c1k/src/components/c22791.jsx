import React from 'react';
const LABEL_22791 = 'component_22791';
export function Component22791({ value = 22791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22791, 'data-value': derived.doubled }, children);
}
export default Component22791;
