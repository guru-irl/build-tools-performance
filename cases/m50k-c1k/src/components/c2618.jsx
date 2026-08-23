import React from 'react';
const LABEL_2618 = 'component_2618';
export function Component2618({ value = 2618, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2618, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2618, 'data-value': derived.doubled }, children);
}
export default Component2618;
