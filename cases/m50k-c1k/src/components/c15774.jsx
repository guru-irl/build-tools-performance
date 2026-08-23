import React from 'react';
const LABEL_15774 = 'component_15774';
export function Component15774({ value = 15774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15774, 'data-value': derived.doubled }, children);
}
export default Component15774;
