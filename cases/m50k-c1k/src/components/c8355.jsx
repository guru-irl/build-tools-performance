import React from 'react';
const LABEL_8355 = 'component_8355';
export function Component8355({ value = 8355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8355, 'data-value': derived.doubled }, children);
}
export default Component8355;
