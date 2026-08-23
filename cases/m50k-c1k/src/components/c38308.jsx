import React from 'react';
const LABEL_38308 = 'component_38308';
export function Component38308({ value = 38308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38308, 'data-value': derived.doubled }, children);
}
export default Component38308;
