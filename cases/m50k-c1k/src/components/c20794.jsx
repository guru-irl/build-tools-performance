import React from 'react';
const LABEL_20794 = 'component_20794';
export function Component20794({ value = 20794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20794, 'data-value': derived.doubled }, children);
}
export default Component20794;
