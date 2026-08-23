import React from 'react';
const LABEL_2094 = 'component_2094';
export function Component2094({ value = 2094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2094, 'data-value': derived.doubled }, children);
}
export default Component2094;
