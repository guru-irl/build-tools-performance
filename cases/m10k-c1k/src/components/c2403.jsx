import React from 'react';
const LABEL_2403 = 'component_2403';
export function Component2403({ value = 2403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2403, 'data-value': derived.doubled }, children);
}
export default Component2403;
