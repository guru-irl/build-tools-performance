import React from 'react';
const LABEL_33774 = 'component_33774';
export function Component33774({ value = 33774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33774, 'data-value': derived.doubled }, children);
}
export default Component33774;
