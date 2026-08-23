import React from 'react';
const LABEL_2045 = 'component_2045';
export function Component2045({ value = 2045, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2045, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2045, 'data-value': derived.doubled }, children);
}
export default Component2045;
