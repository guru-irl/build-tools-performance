import React from 'react';
const LABEL_2960 = 'component_2960';
export function Component2960({ value = 2960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2960, 'data-value': derived.doubled }, children);
}
export default Component2960;
