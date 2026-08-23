import React from 'react';
const LABEL_19176 = 'component_19176';
export function Component19176({ value = 19176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19176, 'data-value': derived.doubled }, children);
}
export default Component19176;
