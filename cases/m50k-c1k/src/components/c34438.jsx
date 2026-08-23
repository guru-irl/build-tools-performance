import React from 'react';
const LABEL_34438 = 'component_34438';
export function Component34438({ value = 34438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34438, 'data-value': derived.doubled }, children);
}
export default Component34438;
