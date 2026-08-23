import React from 'react';
const LABEL_4857 = 'component_4857';
export function Component4857({ value = 4857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4857, 'data-value': derived.doubled }, children);
}
export default Component4857;
