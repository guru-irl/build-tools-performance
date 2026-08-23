import React from 'react';
const LABEL_18920 = 'component_18920';
export function Component18920({ value = 18920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18920, 'data-value': derived.doubled }, children);
}
export default Component18920;
