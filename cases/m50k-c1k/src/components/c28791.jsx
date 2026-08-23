import React from 'react';
const LABEL_28791 = 'component_28791';
export function Component28791({ value = 28791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28791, 'data-value': derived.doubled }, children);
}
export default Component28791;
