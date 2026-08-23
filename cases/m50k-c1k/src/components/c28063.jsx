import React from 'react';
const LABEL_28063 = 'component_28063';
export function Component28063({ value = 28063, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28063, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28063, 'data-value': derived.doubled }, children);
}
export default Component28063;
