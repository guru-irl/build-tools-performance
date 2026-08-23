import React from 'react';
const LABEL_2712 = 'component_2712';
export function Component2712({ value = 2712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2712, 'data-value': derived.doubled }, children);
}
export default Component2712;
