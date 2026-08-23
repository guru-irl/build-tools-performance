import React from 'react';
const LABEL_28668 = 'component_28668';
export function Component28668({ value = 28668, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28668, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28668, 'data-value': derived.doubled }, children);
}
export default Component28668;
