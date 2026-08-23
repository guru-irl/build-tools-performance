import React from 'react';
const LABEL_23774 = 'component_23774';
export function Component23774({ value = 23774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23774, 'data-value': derived.doubled }, children);
}
export default Component23774;
