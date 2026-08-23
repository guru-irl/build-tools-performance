import React from 'react';
const LABEL_16917 = 'component_16917';
export function Component16917({ value = 16917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16917, 'data-value': derived.doubled }, children);
}
export default Component16917;
