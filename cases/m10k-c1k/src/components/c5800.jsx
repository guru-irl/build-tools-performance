import React from 'react';
const LABEL_5800 = 'component_5800';
export function Component5800({ value = 5800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5800, 'data-value': derived.doubled }, children);
}
export default Component5800;
