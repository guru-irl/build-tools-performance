import React from 'react';
const LABEL_4148 = 'component_4148';
export function Component4148({ value = 4148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4148, 'data-value': derived.doubled }, children);
}
export default Component4148;
