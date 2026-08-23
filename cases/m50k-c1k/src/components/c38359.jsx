import React from 'react';
const LABEL_38359 = 'component_38359';
export function Component38359({ value = 38359, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38359, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38359, 'data-value': derived.doubled }, children);
}
export default Component38359;
