import React from 'react';
const LABEL_6940 = 'component_6940';
export function Component6940({ value = 6940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6940, 'data-value': derived.doubled }, children);
}
export default Component6940;
