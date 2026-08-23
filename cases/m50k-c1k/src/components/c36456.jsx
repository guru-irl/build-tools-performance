import React from 'react';
const LABEL_36456 = 'component_36456';
export function Component36456({ value = 36456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36456, 'data-value': derived.doubled }, children);
}
export default Component36456;
