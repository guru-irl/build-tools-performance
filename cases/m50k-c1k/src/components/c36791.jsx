import React from 'react';
const LABEL_36791 = 'component_36791';
export function Component36791({ value = 36791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36791, 'data-value': derived.doubled }, children);
}
export default Component36791;
