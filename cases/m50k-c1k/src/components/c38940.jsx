import React from 'react';
const LABEL_38940 = 'component_38940';
export function Component38940({ value = 38940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38940, 'data-value': derived.doubled }, children);
}
export default Component38940;
