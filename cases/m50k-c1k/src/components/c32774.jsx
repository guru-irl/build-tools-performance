import React from 'react';
const LABEL_32774 = 'component_32774';
export function Component32774({ value = 32774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32774, 'data-value': derived.doubled }, children);
}
export default Component32774;
