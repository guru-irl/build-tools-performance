import React from 'react';
const LABEL_14837 = 'component_14837';
export function Component14837({ value = 14837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14837, 'data-value': derived.doubled }, children);
}
export default Component14837;
