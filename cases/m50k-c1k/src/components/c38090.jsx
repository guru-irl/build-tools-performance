import React from 'react';
const LABEL_38090 = 'component_38090';
export function Component38090({ value = 38090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38090, 'data-value': derived.doubled }, children);
}
export default Component38090;
