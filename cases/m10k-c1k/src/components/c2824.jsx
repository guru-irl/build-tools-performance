import React from 'react';
const LABEL_2824 = 'component_2824';
export function Component2824({ value = 2824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2824, 'data-value': derived.doubled }, children);
}
export default Component2824;
