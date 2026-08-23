import React from 'react';
const LABEL_14825 = 'component_14825';
export function Component14825({ value = 14825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14825, 'data-value': derived.doubled }, children);
}
export default Component14825;
