import React from 'react';
const LABEL_2466 = 'component_2466';
export function Component2466({ value = 2466, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2466, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2466, 'data-value': derived.doubled }, children);
}
export default Component2466;
