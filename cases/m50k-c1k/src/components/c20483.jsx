import React from 'react';
const LABEL_20483 = 'component_20483';
export function Component20483({ value = 20483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20483, 'data-value': derived.doubled }, children);
}
export default Component20483;
