import React from 'react';
const LABEL_2645 = 'component_2645';
export function Component2645({ value = 2645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2645, 'data-value': derived.doubled }, children);
}
export default Component2645;
