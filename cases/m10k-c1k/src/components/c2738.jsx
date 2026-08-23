import React from 'react';
const LABEL_2738 = 'component_2738';
export function Component2738({ value = 2738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2738, 'data-value': derived.doubled }, children);
}
export default Component2738;
