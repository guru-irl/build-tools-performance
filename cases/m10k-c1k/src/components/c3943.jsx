import React from 'react';
const LABEL_3943 = 'component_3943';
export function Component3943({ value = 3943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3943, 'data-value': derived.doubled }, children);
}
export default Component3943;
