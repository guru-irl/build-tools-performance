import React from 'react';
const LABEL_38574 = 'component_38574';
export function Component38574({ value = 38574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38574, 'data-value': derived.doubled }, children);
}
export default Component38574;
