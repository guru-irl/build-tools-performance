import React from 'react';
const LABEL_28798 = 'component_28798';
export function Component28798({ value = 28798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28798, 'data-value': derived.doubled }, children);
}
export default Component28798;
