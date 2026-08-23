import React from 'react';
const LABEL_20155 = 'component_20155';
export function Component20155({ value = 20155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20155, 'data-value': derived.doubled }, children);
}
export default Component20155;
