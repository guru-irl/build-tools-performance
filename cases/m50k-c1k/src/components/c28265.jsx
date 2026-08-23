import React from 'react';
const LABEL_28265 = 'component_28265';
export function Component28265({ value = 28265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28265, 'data-value': derived.doubled }, children);
}
export default Component28265;
