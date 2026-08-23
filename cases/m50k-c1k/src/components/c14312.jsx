import React from 'react';
const LABEL_14312 = 'component_14312';
export function Component14312({ value = 14312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14312, 'data-value': derived.doubled }, children);
}
export default Component14312;
