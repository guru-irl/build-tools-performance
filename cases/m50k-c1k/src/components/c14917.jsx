import React from 'react';
const LABEL_14917 = 'component_14917';
export function Component14917({ value = 14917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14917, 'data-value': derived.doubled }, children);
}
export default Component14917;
