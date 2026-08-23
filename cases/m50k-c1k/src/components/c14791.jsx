import React from 'react';
const LABEL_14791 = 'component_14791';
export function Component14791({ value = 14791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14791, 'data-value': derived.doubled }, children);
}
export default Component14791;
